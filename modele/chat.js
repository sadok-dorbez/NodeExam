const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var Chat = new Schema ({
    username:{
        type:String,
        unique:true,
        required:true
    },
    message:{
        type:String,
        
    },
    sendDate:{
        type:Date
    }
});


module.exports = mongoose.model('chat',Chat);