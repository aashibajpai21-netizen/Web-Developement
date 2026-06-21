import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
const app = express();

app.get("/",(req,res)=>{
    console.log("Default GET API HIT");
    res.json( {message:"welcome to my first backend project"});
});


const port = process.env.PORT || 5000;

app.listen(port, ( )=> {
    console.log("Server Started on PORT :",port);
});
