const Listing=require("../models/listing");




module.exports.index = async (req,res)=>{
  const   allListing = await Listing.find({});
  res.render("listings/index.ejs",{allListing});
   
};





module.exports.renderNewForm = (req,res)=>{
res.render("listings/new.ejs");
 
}


module.exports.showListing = (async(req,res)=>{
  let {id} = req.params; 
const listing = await Listing.findById(id)
  .populate({
    path: "reviews",
    populate: { path: "author" },
  })
  .populate("owner")
  .setOptions({ strictPopulate: false }); // ✅ add this here instead


 //jo review hai obejctid me uska object nikalne ke liye populate use hota hai .populate karne se ura object print ho jayeag 
 if(!listing){
   req.flash("error","Listing you requested does not exist!");
    return res.redirect("/listings");
 }
 console.log(listing);
 res.render("listings/show.ejs",{listing});
 
});




module.exports.createListing = (async (req,res ,next)=>{//async beacuse changes in database
     //first validate listing will be called as soon as /listing pe request ayegi 
    
    // Add error handling for missing listing data
    if (!req.body.listing) {
        req.flash("error", "Listing data is missing!");
        return res.redirect("/listings/new");
    }
    
    // Convert price from string to number if it exists
    if (req.body.listing.price) {
      req.body.listing.price = Number(req.body.listing.price);
    }
    
    const newListing = new Listing (req.body.listing);
    newListing.owner =  req.user._id; //curr user ki id
    await newListing.save();
     req.flash("success","New Listing created!");
    res.redirect("/listings");
  
   
});


module.exports.renderEditForm = async (req,res) => {
     let {id} = req.params; 
    const listing= await Listing.findById(id);
    if(!listing){
   req.flash("error","Listing you requested does not exist!");
    return res.redirect("/listings");
 }
    res.render("listings/edit.ejs",{listing});
 };


 module.exports.updatesListings = async(req,res)=>{
  let {id}=req.params;

    // Convert price from string to number if it exists
    if (req.body.listing && req.body.listing.price) {
      req.body.listing.price = Number(req.body.listing.price);
    }

    await Listing.findByIdAndUpdate(id,{...req.body.listing}); //{...req.body.listing}java script ka object hai jisme sare parameters hai
    req.flash("success","Listing Updated!");
    res.redirect(`/listings/${id}`);
 }


 module.exports.destroyListings = async (req, res) => {
    let { id } = req.params;
    console.log("DELETE called for", id);
    let deletedlisting = await Listing.findByIdAndDelete(id);
    console.log(deletedlisting);
    req.flash("success", "Listing Deleted!");
    res.redirect("/listings");
  }