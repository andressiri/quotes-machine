const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
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

//  Send email
const sendEmail = async (sendTo, subject, mailTemplate, replyTo) => {
  const mailSuccess = await transporter.sendMail({
    from: 'siri.andres.l@gmail.com', 
    to: sendTo, 
    subject: subject,
    html: mailTemplate,
    replyTo: replyTo || 'no-reply@quotesmachine.com'
  });  
  return mailSuccess;
};   

exports.transporter = transporter;
exports.sendEmail = sendEmail;