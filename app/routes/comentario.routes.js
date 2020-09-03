const express = require('express');
const router = express.Router();
const nodemailer = require("nodemailer");
datosProducto = [];


router.post("/", (req, res) => {
    console.log("request came");
    let user = req.body;
    sendMail(user, info => {
      console.log(`The mail has beed send 😃 and the id is ${info.messageId}`);
      res.send(info);
    });
  });
  
  async function sendMail(user, callback) {

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      service: "gmail",
      secure: false,
      port:25,
      auth: {
        user: 'elorenzo1097@gmail.com',
        pass: '123,Lorenzo,123'
      },
      tls:{
          rejectUnauthorized:false
      }
    });

  
   
    let mailOptions = {
        
        from: `${user.email}<yalicomezaj@gmail.com>`, // sender address
        to: 'yalicomezaj@gmail.com', // list of receivers
        subject: "📬📥 Nuevo Comentario 📥📬", // Subject line
        html: `
        <h1 style="text-align: center">🙋‍♂️✉️ Nuevo Comentario de ${user.name}✉️🙋‍♂️</h1>
        <h2>Nombre: <strong> ${user.name}</strong></h2>
        <h3>Correo: <strong> ${user.email}</strong></h3>
        <h4>Telefono: <strong> ${user.phone}</strong></h4>
        <h5>Mensaje: <strong> ${user.message}</strong></h5>`
        
    };
  
    // send mail with defined transport object
    let info = await transporter.sendMail(mailOptions);
    callback(info);
  }

  module.exports = router;

