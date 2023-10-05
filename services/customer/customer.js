const express = require("express");
const http = require('axios');
const port = 3000;
const app = express();

app.get('/customer',(req,res)=>{
      res.json({mesaage:"you are in customer service"});
});

app.get('/customer/orders',async (req,res)=>{
         let data = await  http.get('http://localhost:3001/order/all');
         res.send(data.data);
});

app.listen(port,()=>{console.log(`server run at port ${port}`)});