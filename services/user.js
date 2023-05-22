const { urlencoded } = require('body-parser');
const express=require('express');
var router=express.Router();
const user=require('../modele/user')

exports.add= async (req,res)=>
{
    try{
        const newuser = new user(
            
            {
                name: req.body.name,
                email: req.body.email,
                cin: req.body.cin
                
            }
        );
        await newuser.save();
        res.send({response:newuser, message:"user is saved"});
       
    }
    catch(error){
    
        res.send({message:"can not save user"});
       
    }
}
//modify
exports.modify= async (req,res)=>
{
    try{
        const id = req.params.id;
        const result = await user.updateOne({_id:id},{$set:{...req.body}});
        if(result.nModified===0)
        {
            res.send({message:"user is already updated"});
            return;
        }
        res.send({message:"user is updated"});
    }
    catch(error){
        res.send({message:"there is no user with this id"});
    }
}
//remove
exports.remove= async (req,res)=>
{
    try{
        const id = req.params.id;
        const result = await user.deleteOne({_id:id});
        if(result.deletedCount===0)
        {
            res.send({message:"user is already deleted"});
            return;
        }
        res.send({message:"user is deleted"});
    }
    catch(error){
        res.send({message:"there is no user with this id"});
    }

}
//get all

exports.getAll= async (req,res)=>
{
    try{
        const result = await user.find();
        res.send({response:result, message:"users are found"});
    }
    catch(error){
        res.send({message:"there is no user"});
    }
}

//get one
exports.getOne= async (req,res)=>
{
    try{
        const id = req.params.id;
        const result = await user.findOne({_id:id});
        res.send({response:result, message:"user is found"});
    }
    catch(error){
        res.send({message:"there is no user with this id"});
    }
}
//get by email
exports.getByEmail= async (req,res)=>
{
    try{
        const email = req.params.email;
        const result = await user.findOne({email:email});
        res.send({response:result, message:"user is found"});
    }
    catch(error){
        res.send({message:"there is no user with this email"});
    }
}
//get by cin
exports.getByCin= async (req,res)=>
{
    try{
        const cin = req.params.cin;
        const result = await user.findOne({cin:cin});
        res.send({response:result, message:"user is found"});
    }
    catch(error){
        res.send({message:"there is no user with this cin"});
    }
}
//get by name
exports.getByName= async (req,res)=>
{
    try{
        const name = req.params.name;
        const result = await user.findOne({name:name});
        res.send({response:result, message:"user is found"});
    }
    catch(error){
        res.send({message:"there is no user with this name"});
    }
}
//get by id
exports.getById= async (req,res)=>
{
    try{
        const id = req.params.id;
        const result = await user.findOne({_id:id});
        res.send({response:result, message:"user is found"});
    }
    catch(error){
        res.send({message:"there is no user with this id"});
    }
}
