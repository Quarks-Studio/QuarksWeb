const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");
require("dotenv").config();

admin.initializeApp();

// Configura Nodemailer
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.CORREO_USER,
    pass: process.env.CORREO_PASS,
  },
});

exports.enviarConsultaActualizada = functions.firestore
    .document("Web/Consultas Clientes")
    .onUpdate((change, context) => {
      const beforeData = change.before.data();
      const afterData = change.after.data();

      const beforeArray = beforeData.Consultas || [];
      const afterArray = afterData.Consultas || [];


      if (afterArray.length > beforeArray.length) {
        const newElement = afterArray[afterArray.length - 1];


        const mailOptions = {
          from: process.env.CORREO_USER,
          to: "consultas@quarks-studio.com",
          subject: `Nueva Consulta de: ${newElement.Nombre}`,
          text: `
Se ha agregado una nueva consulta:

- Nombre: ${newElement.Nombre}
- Correo: ${newElement.Mail}
- Número: ${newElement.Número}
- Mensaje: ${newElement.Mensaje}
        `,
        };

        // Enviar el correo
        return transporter
            .sendMail(mailOptions)
            .then(() => console.log("Correo enviado con éxito"))
            .catch((error) => console.error("Error al enviar correo:", error));
      } else {
        return null;
      }
    });
