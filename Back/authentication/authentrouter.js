const router = require('express').Router()
const  user = require('./authentcontroler')
 
router.post('/user/register',user.register)
router.post('/user/signin',user.signIn)
 


module.exports = router