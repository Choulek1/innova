const express = require('express')
const router = express.Router()
//Controller
const command = require('../controller/commandController')
//get all commands
router.get('/command/getAllcommand',command.getAllcommand);
//add a command 
router.post('/command/addcommand',command.addcommand);
//delete all commands
router.delete('/command/deletAllcommand',command.deleteAllcommand)
//update a command
router.put('/command/updatecommand',command.updatecommand);
//get one command
router.get('/command/getOnecommand',command.getOnecommand)


module.exports = router 