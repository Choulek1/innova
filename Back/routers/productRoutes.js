const express = require('express')
const router = express.Router()
//Controller
const product = require('../controller/productContoller')
//get all products
router.get('/product/getAllproduct',product.getAllproduct);
//add a product 
router.post('/product/addproduct',product.addproduct);
//delete all products
router.delete('/product/deletAllproduct/:id',product.deleteAllproduct)
//update a product
router.put('/product/updateproduct/:id',product.updateproduct);
//get one product
router.get('/product/getOneproduct/:id',product.getOneproduct)


module.exports = router 