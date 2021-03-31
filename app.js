const express=require('express');
const { join } = require('path');
const path=require('path');
const app=express();
const static_path=path.join(__dirname,"../public");
app.use(express.static(static_path));

app.get('/weather',(req,res)=>{
    res.sendFile(path.join(__dirname,'./index.html'));
})

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'./home.html'))
})
app.get('/about',(req,res)=>{
    res.sendFile(path.join(__dirname,'./about.html'))
})

app.listen(1000,()=>{
    console.log("Working Fine on 4000");
})