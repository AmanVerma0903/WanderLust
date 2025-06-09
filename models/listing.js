const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./reviews.js");

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    image: {
        filename: String,
        url: String,
    },
    price: Number,
    location: String,
    country: String,
    reviews: [{                          // one to many relation hai listing or review meesliey array me reviews honge 
          type: Schema.Types.ObjectId,    // review ke obejxt id ko store karenge
         ref: "Review",
         default: [],
   }],
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
});

listingSchema.post("findOneAndDelete", async (listing) => {  // jbhi app.js se findOneAndDelete call hoga kisi bhi listing ke liye toh as a middleware yeh post mongoose middleware bhi call hoga aur uske corresponding sare reviews ko delete kar dega 
    if (listing) {
        await Review.deleteMany({ _id: { $in: listing.reviews } });
    }
});

// Export the model only once, DO NOT import model again here
const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
