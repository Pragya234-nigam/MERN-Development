const express=require('express');

const router=express.Router();

router.get('/add',(req,res)=>{
    res.send('response from user Router');
});
router.get('/getall',(req,res)=>{
    res.send('response from getall Router');
});
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
    