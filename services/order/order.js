const express = require('express');
const port = 3001;
const app = express();

let orders=[
    {customerId:1,orderId:121,price:120,quantity:2,productId:10},
    {customerId:1,orderId:125,price:100,quantity:3,productId:15}
]

app.get('/order',(req,res)=>{
     res.json({message:"you are in order service"});
});

app.get('/order/all',(req,res)=>{
    res.send(orders);
});

app.listen(port,()=>console.log(`server run at port ${port}`));