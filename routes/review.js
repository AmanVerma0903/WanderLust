const express = require("express");
const router = express.Router({mergeParams:true}); //parent route("listings/:id/reviews/") child route se merge hota hai    
const wrapAsync = require("../utils/wrapAsync.js");


const Listing=require("../models/listing.js");
const Review = require("../models/reviews.js");
const  {validateReview ,isLoggedIn ,isReviewAuthor} = require("../middleware.js"); 

const reviewController = require("../controllers/review.js");
  

//reviews 
//POST review route
router.post("/" ,isLoggedIn,validateReview,wrapAsync(reviewController.createReview));

//delete review route 
router.delete("/:reviewId",isReviewAuthor,isLoggedIn,wrapAsync(reviewController.destroyReview));

module.exports = router;