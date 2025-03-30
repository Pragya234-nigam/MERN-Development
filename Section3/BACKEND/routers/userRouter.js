const express=require('express');
const Model=require('../models/userModel');
require('dotenv').config();
const jwt=require('jsonwebtoken');

const router=express.Router();

router.post('/add',(req,res)=>{

    console.log(req.body);
    new Model(req.body).save()
    .then((result) => {
        res.status(200).json(result);
        
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
    // res.send('response from user Router');
});

//url Parameter
router.get('/getbycity/:city',(req,res)=>{//get send url String Data
     Model.find({city:req.params.city})
     .then((result) => {//cors
        res.status(200).json(result);
     }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
        
     });
});
router.get('/getall',(req,res)=>{
    // res.send('response from getall Router');
    Model.find()//Read Operation
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(result);
    });
});

router.get('/getbyemail/:email', (req,res)=>{
    Model.find({email:req.params.email})
    .then((result)=>{
        res.status(200).json(result);
    }).catch((err)=>{
        console.log(err);
        res.status(500).json(err);
    });
})
router.get('/getbyid/:id',(req,res)=>{
  Model.findById(req.params.id)
  .then((result) => {
      res.status(200).json(result);
  }).catch((err) => {
      console.log(err);
      res.status(500).json(err);
  });
});
router.put('/update/:id',(req,res)=>{
    Model.findByIdAndUpdate
    (req.params.id,req.body,{new:true})
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});
router.delete('/delete/:id',(req,res)=>{
    Model.findByIdAndDelete(req.params.id)
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});
router.post('/authenticate',(req,res)=>{
    Model.findOne(req.body)
    .then((result) => {
        if(result){
            //login success
            // generate token
            const {_id,name,email}=result;
            const payload={_id,name,email};

            jwt.sign(
                payload,
                process.env.JWT_SECRET,
                { expiresIn: '2d'},
                (err,token)=>{
                    if(err){
                        console.log(err);
                        return res.status(500).json(err);
                    }
                    else{
                        res.status(200).json({token});
                    }
                }
            )
        }else{// Login failed
            res.status(401).json({message:'Invalid Credentials'}); // Unauthorized
        }
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
})


module.exports=router;
    