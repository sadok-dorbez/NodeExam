const { default: mongoose } = require('mongoose');
const mongo=require('mongoose');
const schema=mongo.Schema;

const User=new schema ({

    name: String,
    email: String,
    cin: Number

})

//user: Collection Name
module.exports= mongo.model("user", User);