const express = require('express');
const sendVerificationCodeRouter = express.Router();
const rateLimiter = require('../../../../config/requestsRateLimiter/rateLimiter.js');
const mailer = require('../../../../config/mailer.js');
const generateCode = require('../../../../functions/generateCode.js');
const checkAuthenticated = require('../../../../config/checkAuthenticated.js');

// Handle email verification request - @/users/email/send/verification-code
sendVerificationCodeRouter.get('/',
  rateLimiter.max500RequestsPerday.prevent,
  rateLimiter.multipleClickingLimiter.prevent,
  // prevent too many mail sents 
  rateLimiter.tooManyMailsSent.prevent,
  checkAuthenticated,
  async (req, res) => {
    // check at least 10 seconds have passed from last mail sent - TODO: modularize this logic
    let timePassedBetweenRequests = 0;
    if (!req.session.sendVerificationTimestamp) {
      req.session.sendVerificationTimestamp = Date.now();
      timePassedBetweenRequests = 10000;
    } else {
      const auxDate = Date.now();
      timePassedBetweenRequests = auxDate - req.session.sendVerificationTimestamp;
    };
    if (timePassedBetweenRequests < 10000) {
      console.log('Spam control');
      console.log(`You will have to wait ${Math.floor((10000 - timePassedBetweenRequests)/1000)} seconds to do another request`);
      res.status(429).json({message: `You will have to wait ${Math.floor((10000 - timePassedBetweenRequests)/1000)} seconds to do another request`});
    } else {
      //  Everything seems OK => Send email
      req.session.sendVerificationTimestamp = Date.now();
      req.session.code = generateCode();
      const mailTemplate = `
        <h1>Welcome to Quotes Machine</h1>
        <p>Hello ${req.user.name}! In order to verify your identity you should use the following code:</p>
        <h2>Code: ${req.session.code}</h2>
        <p>Sorry for the trouble, we hope you enjoy the app!</p>`;
      const emailSuccess = await mailer.sendEmail(req.user.email, 'Quotes machine email verification', mailTemplate);
      if (emailSuccess.accepted[0] === `${req.user.email}`) {
        console.log(`Email sent to ${req.user.email}`);
        res.status(201).json({message: 'Email sent with the code', userEmail: req.user.email});
        console.log(`code: ${req.session.code}`);
      } else {
        console.log('Mail rejected');
        res.status(500).json({message: `There was a problem sending the email, please try again`});
      };
    };
  }
);

module.exports = sendVerificationCodeRouter;