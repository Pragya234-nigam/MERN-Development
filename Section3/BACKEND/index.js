const express=require('express');
const UserRouter=require('./routers/userRouter');
const app=express();
const port=5000;
//endpoint or route
//middleware
app.use('/user',UserRouter);
app.get('/',(req,res)=>{
res.send('response from express')
});
app.get('/add',(req,res)=>{
    res.send('response from add')
    });
    app.get('/getall',(req,res)=>{
        res.send('response from getall')
        });
app.listen(port,()=>{
    console.log('Server Started');
});