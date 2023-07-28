const express = require('express');
const  app = express();
const ejs = require('ejs');
const bodyParser = require('body-parser');
const path = require('path');
const url = require('url');
const nodemailer = require('nodemailer');
 

const transport = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    secure:true,
    port: 8080,
    auth: {
        user:'odhiamboevans98@gmail.com',
        pass:'tctyvryiriwxsbxw'
   
    }
}) 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,'public')))
app.use(bodyParser.urlencoded({extended:true}))
// For parsing application/json

// For parsing application/x-www-form-urlencoded
app.set('view engine','ejs')
     
app.get('/',(req,res)=>{
    res.render('index')
})
 /* Color Theme Swatches in Hex */
// .Graphic-Design-1-hex { color: #161A73; }
// .Graphic-Design-2-hex { color: #1C228C; }
// .Graphic-Design-3-hex { color: #090A26; }
// .Graphic-Design-4-hex { color: #3752A6; }
// .Graphic-Design-5-hex { color: #A6977B; }
app.get('/primeitsolutions',(req,res)=>{
    res.render('mywebsite')
})

app.post('/postdata',(req,res)=>{
    let formData = [...req.body];
    let name = formData[0][1];
    let email = formData[1][1]
    const payload = {
        from:'odhiamboevans98@gmail.com',
        to: email,
        subject:`Hello there ${name}`,
        text: `<h1>Hello there</h1>`
    }
    
    transport.sendMail(payload,(err,info)=>{
        if(err){
            console.log(err)
        }else{
            console.log('mailsent',info.response) 
        }
    })
})
  

app.listen(8080,(req,res)=>{
    console.log('listening')
})  
       