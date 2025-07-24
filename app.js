if(process.env.NODE_ENV!="production"){
require('dotenv').config();//reuire env file which  is used to store credentials
}
//never upload .env file in deployment ebacuse it contain credentials


const express= require("express");
const app=express();
const path=require("path");
const methodOverride=require("method-override");
const ejsMate=require("ejs-mate");
const mongoose = require('mongoose');
const ExpressError = require("./utils/ExpressError.js");
const session = require("express-session");
const MongoStore = require('connect-mongo');
const flash = require("connect-flash");
const port = process.env.PORT || 8080;       

const listingRouter = require("./routes/listing.js");
const reviewRouter = require("./routes/review.js");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");
const userRouter = require("./routes/user.js");
const dbUrl = process.env.ATLASDB_URL;

main().then(() =>{
    console.log("connect to DB");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect(dbUrl);

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}


// app.get("/testlisting",async(req,res)=>{
//   let samplelisting= new Listing({
//     title:"my new villa",
//     description:"byt the beach",
   
//     price: 1200,
//     location: "Patna,bihar",
//     country: "india",
//   });
//   await samplelisting.save();
//   console.log("Sample was saved");
//   res.send("Success");
// })

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname,"/public")));


// app.get("/",(req,res)=>{
//    res.send("high i am root");
// });


const store = MongoStore.create({
  mongoUrl : dbUrl,
  crypto:{
    secret : process.env.SECRET,
  },
  touchAfter:24 * 3600, //kitne seconds ke baad session update hoga 
});

store.on("error",(err)=>{
  console.log("ERRRO IN MONGO SESSION STORE ",err);
});

const sessionOptions = {
  store,
  secret : process.env.SECRET,
  resave: false,
  saveUninitialized : true,
  cookie: {
     expires:Date.now() + 7*24*60*60*1000,    //aaj se 1 week baad tk ka hai in miliiseconds
     maxAge:7*24*60*60*1000,
     httpOnly:true,
  }
};






app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize()); //initalize passport
app.use(passport.session()); //identify users as they browse from page to page
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser()); //user se realted all info store
passport.deserializeUser(User.deserializeUser());//user se realted all info remove

// Consolidated middleware for all res.locals
app.use((req, res, next) => {
  console.log("currUser middleware running, req.user:", req.user);
  res.locals.currUser = req.user;
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  next();
});

// Redirect root to /listings
app.get("/", (req, res) => {
  res.redirect("/listings");
});


// app.get("/demouser",async(req,res)=>{
//   let fakeUser = new User({
//     email:"student@gmail.com",
//     username:"delta-student"
//   });
//   let registeredUser= await User.register(fakeUser,"helloworld!");  //register a new user with a given passowrd
//    res.send(registeredUser);
// })


app.use("/listings",listingRouter);
app.use("/listings/:id/reviews",reviewRouter);
app.use("/",userRouter);



app.use( (req,res,next)=>{ //apart from above route koi aur route pe yeh bhej dega page not found
  next(new ExpressError(404,"Page Not Found !!"))
})


//middleware
app.use((err,req,res,next) =>{
  let {statusCode = 500 , message = "Something Went Wrong!"} = err;
  res.status(statusCode).render("error.ejs",{ message });
   
})



app.listen(port, () => {
  console.log(`Serving on port ${port}`);
});