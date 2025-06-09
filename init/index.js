const mongoose= require("mongoose");
const initData= require("./data.js");
const Listing=require("../models/listing.js");
main().then(() =>{
    console.log("connect to DB");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/wanderlust');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}



const initDB = async () => {
  await Listing.deleteMany({});

  const ownerId = new mongoose.Types.ObjectId("683de47d1612a1ee872edd30");

  initData.data = initData.data.map((obj) => ({
    ...obj,
    owner: ownerId
  }));

  await Listing.insertMany(initData.data);
  console.log(" Data was initialized with owner");
};



initDB();