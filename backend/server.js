const express = require("express");
const app = express();
const cors = require("cors");
const nodemailer = require('nodemailer');
require('dotenv').config()
let mailTransporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
      user: process.env.EMAIL,
      pass: process.env.PASS
  }
});



app.use(cors());

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
app.post('/email',(req,res)=>{
  
  const {body}=req

  let mailDetails = {
    from: process.env.EMAIL,
    to: req.body.to,
    subject:req.body.object ,
    text: req.body.message
};
mailTransporter.sendMail(mailDetails, function(err, data) {
    if(err) {
        console.log('Error Occurs');
    } else {
        console.log('Email sent successfully');
        res.status(200).json({"message" : "mail sent successfully!!!"});
    }
});
});
 
// set port, listen for requests
 
app.listen(8081, () => {

  console.log(`Server is running on port 8081.`);
});
 
