const express=require('express');
const Model=require('../models/userModel');

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
router.get('/getall',(req,res)=>{
    // res.send('response from getall Router');
    Model.find()
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(result);
    });
});

router.get('getbyemail', (req,res)=>{
    res.send('response from user getbyemail');
})
router.get('/getbyid',(req,res)=>{
    res.send('response from getbyid Router');
});
router.get('/delete',(req,res)=>{
    res.send('response from delete Router');
});
router.get('/update',(req,res)=>{
    res.send('response from update Router');
});


module.exports=router;
    