const express = require("express");
const router = express.Router();    
const wrapAsync = require("../utils/wrapAsync.js");
const multer  = require('multer');
const {storage} = require("../cloudConfig.js");
const upload = multer({ dest: 'uploads/' });
const {isLoggedIn, isOwner, validateListing} = require("../middleware.js");
 
const listingController = require("../controllers/listings.js");


router.route("/")
.get(wrapAsync(listingController.index))
.post(validateListing,isLoggedIn, wrapAsync(listingController.createListing)
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