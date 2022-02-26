const COMMAND= require('../models/commandModel')

module.exports = {
    addcommand:async(req,res)=>{
        try{  const fullName  = req.body.fullName 
        const phone = req.body.phone 
        const email = req.body.email
        const photo = req.body.photo
        const productName = req.body.productName
        const productPhoto = req.body.productPhoto
        const productPrice = req.body.productPrice

        const command = await new COMMAND({
            fullName,phone,email,photo,productName,productPhoto,productPrice
        })
      await   command.save()
        res.json(command)
     }
     catch(error){
        console.log(error)
    }
   },

   getAllcommand:async(req,res)=>{
     try{
       const command = await COMMAND.find()
       res.json(command)
     } catch(error){
       console.log(error)
   }

   },
   deleteAllcommand:async(req,res)=>{
       try{
           const command = await COMMAND.findByIdAndDelete(req.params.id)
           res.json(command)
       }
       catch(error){
           console.log(error)
       }

   },
   updatecommand:async(req,res)=>{
      try{
       const command = await COMMAND.findByIdAndUpdate(req.params.id,req.body,{new:true})
       res.json(command)
      }
      catch(error){
       console.log(error)
   }},
   getOnecommand:async(req,res)=>{
       try{
           const command = await COMMAND.findById(req.params.id);
           res.json(command)
       }
       catch(error){
           console.log(error)
   }
   }


}