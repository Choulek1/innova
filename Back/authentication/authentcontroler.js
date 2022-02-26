const USER = require('../models/userModel')
const bcrypt = require('bcrypt')
 const jwt = require('jsonwebtoken');
module.exports={
  register:(req,res)=>{

    USER.findOne({ email: req.body.email }).exec(async (error, user) => {
      if (user)
        return res.status(400).json({
          error: "User already registered",
        });

        const fullname = req.body.fullName;
        const photo =  'https://alfafafoods.com/wp-content/uploads/2020/10/PngJoy_gray-circle-login-user-icon-png-transparent-png_2750635-1.png'
        const phone = req.body.phone;
        const email = req.body.email;
        const salt = await new bcrypt.genSalt(10)
 const password = await new bcrypt.hash(req.body.password, salt);
        const _user = new USER({
        fullname ,
        
        photo,
        phone,
        email,
        password  
      });
      _user.save((error, user) => {
        if (error) {
          return res.status(400).json({
            message: "Something went wrong",
          });
        }
        if (user) {
          return res.status(201).json({
            message: "User created suceesfully !",
            user
          })
        }
      });
    });
      
         
  },
    signIn : (req, res) => {
        USER.findOne({ email: req.body.email }).exec(async (error, user) => {
          if (error) return res.status(400).json({ error });
          if (user) {
            const verPass =  await new bcrypt.compare(req.body.password,user.password)
             if (verPass ) {
              const token =  jwt.sign({_id:user._id,fullname:user.fullName,photo:user.photo,phone:user.phone,email:user.email,password:user.password},'MEARNSECRET',{expiresIn:'1h'})
               res.status(200).json({
                token 
              });
            } else {
              return res.status(400).json({
                message: "Invalid password !",
              });
            }
          } else {
            return res.status(400).json({ message: "Something went wrong" });
          }
        });
      },
    
    
    }