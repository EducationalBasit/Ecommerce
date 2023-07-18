const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    passored:{
        type:String,
        required:true
    }

},
{
    timestamps:true
});
const User = mongoose.model("users", userSchema);
module.exports = User;