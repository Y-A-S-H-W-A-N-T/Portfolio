
const express = require('express');
const path = require('path');
const app=express();

const port = 80;
app.use('/static', express.static('source'));
app.use(express.urlencoded());

app.set('view engine','pug');
app.set('views',path.join(__dirname, 'pages'));

app.get("/",(req,res)=>{
    res.render('index.pug');
})

app.get("/contact",(req,res)=>{
    res.render('contact.pug');
})

app.get("/about",(req,res)=>{
    res.render('about.pug');
})

app.listen(port,()=>{
    console.log(`LISTENING at port ${port}`);
})