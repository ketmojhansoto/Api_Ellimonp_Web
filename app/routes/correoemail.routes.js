const express = require('express');
const router = express.Router();
const nodemailer = require("nodemailer");
datosProducto = [];
vista = "";
var fechaRegistro = (new Date()).getDate() +"/" +((new Date()).getMonth()+1) + "/"+ (new Date()).getFullYear();

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
        pass: '123,Rodolfo,123'
      },
      tls:{
          rejectUnauthorized:false
      }
    });

  
    for (const pro of user.productos) {
        let subtotal = pro.cantidad * pro.precio
        vista = vista + 
        `   <tr>
                <td style="text-align: center"><img src="${pro.imagen}"style="width: 200px; border-radius: 10px;" ></td>
                <td style="text-align: center">${pro.cantidad}</td>
                <td style="text-align: center">${pro.nombre}</td>
                <td style="text-align: center">${pro.precio}</td>
                <td style="text-align: center">${subtotal}</td>
            </tr>
        `;         
    }

    let mailOptions = {
        
        from: "LimoncitoPeruano<yalicomezaj@gmail.com>", // sender address
        to: user.email, // list of receivers
        subject: "😃🍴 Orden Online Completada Exitosamente 🍴😃", // Subject line
        html: `
        <div style="text-align: center"><img style="width: 200px" src="https://limonpimg.s3.us-east-2.amazonaws.com/img_web/logo.png"></div>
        <h1 style="text-align: center">🍋🐟 Su Orden Online a sido concretada 🐟🍋</h1>
        <p>Hola ${user.name}</p>
        <p>
            ¡Gracias por tu pedido! <br>
            En estos momentos tu Orden Online se a completado, gracias por elegir la orden con nosotros "El Limoncito Peruano".<br>
            <strong>Fecha de Registro:</strong><br><strong> ${fechaRegistro}</strong>
        </p>
        <table class="text-uppercase">
        <thead>
        <tr>
            <th colspan="2">DETALLE DE LA ORDEN ONLINE</th>
        </tr>
        <tr>
            <td>
            <strong>Direccion Donde Se Enviará La Orden:</strong:>&nbsp; ${user.direccion} <br>
            <strong>Telefono de Contacto de la Orden:</strong>&nbsp;${user.telefono}
            </td>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td style="text-align: center">Imagen</td>
            <td style="text-align: center">Cantidad</td>
            <td style="text-align: center">Producto</td>
            <td style="text-align: center">Precio Unitario</td>
            <td style="text-align: center">Sub Total</td>
        </tr>
        `+ vista +
        `
        </tbody>
        <tfoot>
        <tr>
            <th colspan="2"></th>
            <th colspan="2">Sub total</th>
            <td style="text-align: center" class="text-danger">${user.total}</td>
        </tr>
        <tr class="text-danger text-bold">
            <th colspan="2"></th>
            <th colspan="2">Total</th>
            <td style="text-align: center">${user.total}</td>
        </tr>
        </tfoot>
        </table>
        <p>
            Contactenos <br>
            Celular: 920198541 <br>
            Ubicación: Jr. Cajamarca 746 - Huancayo <br>
            Correo: <span class="text-primary">maximoquisperios@gmail.com</span>
        </p>
        <p>Los esperamos en El Limoncito Peruano.</p>`
    };
  
    // send mail with defined transport object
    let info = await transporter.sendMail(mailOptions);
    vista = "";
    console.log(vista);
    callback(info);
  }

  module.exports = router;
