const mongoose=require("mongoose");

const userDetailsSchema=new mongoose.Schema({
    name: String,
    email: String,
    password:String,
    education:String,
    phoneNo: String,
},
{
    collection:"UserInfo",
});
mongoose.model("UserInfo",userDetailsSchema);