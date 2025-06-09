
const Listing=require("../models/listing.js");
const Review = require("../models/reviews.js");



module.exports.createReview = async (req,res)=>{
   let listing = await Listing.findById(req.params.id);
   let newReview = new Review(req.body.review);
   newReview.author = req.user._id; //author hoga yeh id wala user
  
   listing.reviews.push(newReview);
    await newReview.save();
    await listing.save(); //existing document me database me changes kar rhe hai to eske liye .save ko call krte hai  jo async funciton hai khud me
    console.group("new review saved");
    req.flash("success","Review created!");
    res.redirect(`/listings/${listing._id}`)
};



module.exports.destroyReview = async(req,res) =>{
   let {id,reviewId} =req.params;
   await Listing.findByIdAndUpdate(id,{$pull: {reviews:reviewId}})    //kyuki listing me review array se bhi delete karna hoga we us mongo pull operator
   await Review.findByIdAndDelete(reviewId);
       req.flash("success","Review Deleted!");
   res.redirect(`/listings/${id}`);
};