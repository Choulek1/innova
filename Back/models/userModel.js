const mongoose = require('mongoose');
const Schema = mongoose.Schema
module.exports = mongoose.model('user',new Schema ({
fullName:{
        type:String
    },
    photo:{
        type:String,

    },
    email:{
        type:String,
    },
    password:{
        type:String
    },
    phone:{
        type:String
    }
}
))