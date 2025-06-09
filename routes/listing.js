const express = require("express");
const router = express.Router();    
const wrapAsync = require("../utils/wrapAsync.js");
const Listing=require("../models/listing.js");
const  {isLoggedIn , isOwner ,validateListing} = require("../middleware.js");  //middleware hum  har route me use kar skte hai kuch conditons ke thorught route ko pass karne ke liye
   
const multer  = require('multer');
const {storage} = require("../cloudConfig.js");
const upload = multer({ storage });
 

const listingController = require("../controllers/listings.js");


router.route("/")
  .get(wrapAsync(listingController.index))
.post(
  isLoggedIn,
 upload.single('image'), // <-- use "image" flat string here
  (req, res, next) => {
    if (req.file) {
      req.body.listing.image = {
        url: req.file.path,
        filename: req.file.filename
      };
    }
    next();
  },
  validateListing,
  wrapAsync(listingController.createListing)
);




//NEW route
router.get("/new", isLoggedIn, listingController.renderNewForm );


router.route("/:id")
.get(wrapAsync(listingController.showListing))
.put(isLoggedIn,isOwner,validateListing,wrapAsync(listingController.updatesListings))
.delete(isLoggedIn,isOwner,wrapAsync(listingController.destroyListings));





//edit route
router.get("/:id/edit",isLoggedIn,isOwner,wrapAsync(listingController.renderEditForm));



 module.exports =router;