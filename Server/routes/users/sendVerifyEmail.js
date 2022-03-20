const express = require("express");
const sendVerifyEmailRouter = express.Router();
const rateLimiter = require('../../config/requestsRateLimiter/rateLimiter.js');
const mailer = require('../../config/mailer.js');
const generateCode = require('../../functions/generateCode.js');

// Logout and session reset handle
sendVerifyEmailRouter.get('/',
  rateLimiter.max500RequestsPerday.prevent,
  rateLimiter.multipleClickingLimiter.prevent,
  // prevent too many mail sents 
  rateLimiter.tooManyMailsSent.prevent,
  (req, res) => {
    if (!req.user) {
      console.log('Not logged in');
      res.status(428).json({message: 'You should be logged in order to do this'})
    } else {
      // check at least 10 seconds have passed from last mail sent
      let timePassedBetweenRequests = 0;
      if (!req.session.sendVerifyEmailTimestamp) {
        req.session.sendVerifyEmailTimestamp = Date.now();
        timePassedBetweenRequests = 10000;
      } else {
        const auxDate = Date.now();
        timePassedBetweenRequests = auxDate - req.session.sendVerifyEmailTimestamp;
      };
      if (timePassedBetweenRequests < 10000) {
        console.log('Spam control');
        console.log(`You will have to wait ${Math.floor((10000 - timePassedBetweenRequests)/1000)} seconds to do another request`);
        res.status(429).json({message: `You will have to wait ${Math.floor((10000 - timePassedBetweenRequests)/1000)} seconds to do another request`});
      } else {
        //  send email
        req.session.sendVerifyEmailTimestamp = Date.now();
        req.session.code = generateCode();
        const mailTemplate = `
          <h1>Welcome to Quotes Machine</h1>
          <p>Hello ${req.user.name}! In order to verify your account you should use the following code:</p>
          <h2>Code: ${req.session.code}</h2>
          <p>Thanks for joining us, we hope you enjoy it!</p>`;
        mailer.sendEmail(req.user.email, 'Quotes machine email verification', mailTemplate);
        console.log('Email sent');
        res.status(201).json({message: 'Email sent with the code'});  
        console.log(`code: ${req.session.code}`);
      };
    };
  }
);

module.exports = sendVerifyEmailRouter;