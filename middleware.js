const Listing=require("./models/listing.js");
const Review = require("./models/reviews.js");
const ExpressError = require("./utils/ExpressError.js");
const {listingSchema ,reviewSchema } = require("./schema.js"); //schema.js





module.exports.isLoggedIn=(req,res,next)=>{
    if(!req.isAuthenticated()){  //used to check whether user is logged in or not
    req.session.redirectUrl = req.originalUrl;
  req.flash("error","you must be logged in to create listing!");
   return res.redirect("/login");
}
next();
};


module.exports.saveRedirectUrl =(req,res,next)=>{ //jaha se login karne bola wahi se login ke baad page redirect ho jayega
    if(req.session.redirectUrl){
        res.locals.redirectUrl = req.session.redirectUrl;
    }
    next();
  
};


module.exports.isOwner = async(req,res,next) =>{
     let {id}=req.params;
   let listing = await Listing.findById(id); //listing ki info nikal rhe hai 
   if( !listing.owner._id.equals(res.locals.currUser._id)){//lsiting ke owner ko curr user se match kar rhe hai
    req.flash("error" ,"You are not the owner of this listing");
     return res.redirect(`/listings/${id}`);
   }
     next();
};


//validate
module.exports.validateListing = (req,res,next) => {
  // Convert price from string to number if it exists
  if (req.body.listing && req.body.listing.price) {
    req.body.listing.price = Number(req.body.listing.price);
  }
  
  let { error } = listingSchema.validate(req.body);
     if(error){
      let errMsg = error.details.map((el) => el.message).join(","); //sare error ke details k club kar diye seprated by comma
      throw new ExpressError(400,errMsg);
     }else{
      next();
     }
};


//validate review
module.exports.validateReview = (req,res,next) => {
let { error } = reviewSchema.validate(req.body);
     if(error){
      let errMsg = error.details.map((el) => el.message).join(","); //sare error ke details k club kar diye seprated by comma
      throw new ExpressError(400,errMsg);
     }else{
      next();
     }
};


module.exports.isReviewAuthor = async(req,res,next) =>{   //jo  review ko delete karega  wah usak author hai ki nhi cbeck akrega yeh midldeware
     let { id, reviewId}=req.params;
   let review = await Review.findById(reviewId).populate("author"); //listing ki info nikal rhe hai 
   if( !review.author._id.equals(res.locals.currUser._id)){//lsiting ke owner ko curr user se match kar rhe hai
    req.flash("error" ,"You did not create this review");
     return res.redirect(`/listings/${id}`);
   }
     next();
};