
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");



const userSchema = new Schema({ //sirf email store karenge password username  yeh passportLocalMongoose automatically store kar leta hi
    email:{
        type:String,
        required: true
    }
});


userSchema.plugin(passportLocalMongoose); //usrname,password,hashingadn salting inbuilt store karta hai yeh
module.exports = mongoose.model("User",userSchema); 