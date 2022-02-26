const mongoose = require('mongoose');
const Schema = mongoose.Schema
module.exports = mongoose.model('product',new Schema({
    productName:{
        type:String
    },
    photo:{
        type:String,

    },
    price:{
        type:String,
    }
}))