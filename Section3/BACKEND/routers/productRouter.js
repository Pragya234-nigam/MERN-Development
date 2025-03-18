const express=require('express');
const { Model } = require('mongoose');

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
    res.send('response getall fron product Router');
});
router.get('/getbyid/:id',(req,res)=>{
    Model.findById(req.params.id)
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});
router.get('/delete',(req,res)=>{
    res.send('response delete from product Router');
});
router.get('/update',(req,res)=>{
    res.send('response update from product Router');
});


module.exports=router;
    