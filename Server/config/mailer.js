const nodemailer = require('nodemailer');
require('dotenv').config();

let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: 'siri.andres.l@gmail.com', // generated ethereal user
    pass: process.env.MAIL_PASSWORD // generated ethereal password
  },
});

transporter.verify()
  .then(() => {
    console.log('Ready to send mails...');
  });

module.exports = transporter;