const express=require('express');
const UserRouter=require('./routers/userRouter');
const ProductRouter=require('./routers/productRouter');
const cors=require('cors');
const app=express();
const port=5000;
//endpoint or route
//middleware
app.use(cors({
    origin:['http://localhost:3000'],
}));
app.use(express.json());//readable
app.use('/user',UserRouter);
app.use('/product',ProductRouter);
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
});//product router and product Model and index connection,getbyemail