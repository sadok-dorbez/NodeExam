const express = require("express");
const { getMessages, saveMessage  } = require("../services/chat");
const router = express.Router();

router.get('/show',getMessages);
router.post('/',saveMessage); 

router.get("/",(req,res,next)=>{
    res.render("chat");
});   


module.exports = router