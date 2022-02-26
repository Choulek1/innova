const PRODUCT= require('../models/productModel')

module.exports = {
    addproduct:async(req,res)=>{
        try{  const productName  = req.body.productName 
        const price = req.body.price 
        const photo = req.body.photo

        const product = await  new PRODUCT({
            productName,price,photo
        })
      await   product.save()
        res.json(product)
     }
     catch(error){
        console.log(error)
    }
   },

   getAllproduct:async(req,res)=>{
     try{
       const product = await PRODUCT.find()
       res.json(product)
     } catch(error){
       console.log(error)
   }

   },
   deleteAllproduct:async(req,res)=>{
       try{
           const product = await PRODUCT.findByIdAndDelete(req.params.id)
           res.json(product)
       }
       catch(error){
           console.log(error)
       }

   },
   updateproduct:async(req,res)=>{
      try{
       const product = await PRODUCT.findByIdAndUpdate(req.params.id,req.body,{new:true})
       res.json(product)
      }
      catch(error){
       console.log(error)
   }},
   getOneproduct:async(req,res)=>{
       try{
           const product = await PRODUCT.findById(req.params.id);
           res.json(product)
       }
       catch(error){
           console.log(error)
   }
   }


}