const mongoose = require('mongoose');
const Schema = mongoose.Schema
module.exports = mongoose.model('command',new Schema ({
    fullName:{
        type:String
    },
    photo:{
        type:String,

    },
    email:{
        type:String,
    },
    phone:{
        type:String
    },
    productName:{
        type:String
    },
    productPhoto:{
        type:String
    },
    productPrice:{
        type:String
    },
    productID:{
        type:String
    }
}))