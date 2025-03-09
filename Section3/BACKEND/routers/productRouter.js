const express=require('express');

const router=express.Router();

router.get('/add',(req,res)=>{
    res.send('response add from product Router');
});
router.get('/getall',(req,res)=>{
    res.send('response getall fron product Router');
});
router.get('/getbyid',(req,res)=>{
    res.send('response getbyid from product Router');
});
router.get('/delete',(req,res)=>{
    res.send('response delete from product Router');
});
router.get('/update',(req,res)=>{
    res.send('response update from product Router');
});


module.exports=router;
    