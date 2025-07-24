const User = require("../models/user.js");

module.exports.renderSignupForm = (req,res)=>{
  res.render("users/signup.ejs");
}


module.exports.renderLoginForm = (req,res)=>{
 res.render("users/login.ejs");
}

module.exports.signup = async (req,res,next)=>{
  try{
     let {username, email, password} = req.body;
    
     const newUser = new User({email, username});
     const registeredUser = await User.register(newUser, password);
     console.log(registeredUser);
     req.login(registeredUser,(err)=>{
      if(err){
        return next(err);
      }
       req.flash("success","Welcome to wanderlust!");
       res.redirect("/listings");
     }); //automaticalay login kar deta hai after user sign up 
     
  } catch(e){
    req.flash("error",e.message);
    res.redirect("/signup");
  }
}

module.exports.login = async(req,res)=>{  //passport authenicate is a middlewarewhich is used to authenitcate
  req.flash("success","Welcome back to  Wanderlust");
  let redirectUrl = res.locals.redirectUrl || "/listings";
   res.redirect(redirectUrl); //jaha se login karne bola wahi se login ke baad page redirect ho jayega
};


module.exports.logout = (req,res,next)=>{
  req.logout((err)=>{
    if(err){
      return next(err);
    }
    req.flash("success","you are logged out now!");
    res.redirect("/listings");
  });
};