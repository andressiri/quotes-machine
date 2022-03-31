const express = require("express");
const sendChangePasswordRouter = express.Router();
const rateLimiter = require('../../../config/requestsRateLimiter/rateLimiter.js');
const mailer = require('../../../config/mailer.js');
const generateCode = require('../../../functions/generateCode.js');
const validateEmail = require('../../../functions/validateEmail');

// User model
const User = require('../../../models/User.js');

// Logout and session reset handle
sendChangePasswordRouter.post('/',
  rateLimiter.max500RequestsPerday.prevent,
  rateLimiter.multipleClickingLimiter.prevent,
  // prevent too many mails sent
  rateLimiter.tooManyMailsSent.prevent,
  async (req, res) => {
      // check correct data was sent in the request
    if (!req.body.email || !validateEmail(req.body.email)) {
      console.log('Not valid email');
      res.status(412).json({message: 'Please enter a valid email'});
    } else {
      // check if user to change password exists
      await User.findOne({email: req.body.email})
        .then(async (user) => {
          if (!user) {
            console.log('Email not registered');
            res.status(404).json({message: 'That email is not registered'});
          } else {
            // check at least 10 seconds have passed from last mail sent
            let timePassedBetweenRequests = 0;
            if (!req.session.sendChangePasswordTimestamp) {
              req.session.sendChangePasswordTimestamp = Date.now();
              timePassedBetweenRequests = 10000;
            } else {
              const auxDate = Date.now();
              timePassedBetweenRequests = auxDate - req.session.sendChangePasswordTimestamp;
            };
            if (timePassedBetweenRequests < 10000) {
              console.log('Spam control');
              console.log(`You will have to wait ${Math.floor((10000 - timePassedBetweenRequests)/1000)} seconds to do another request`);
              res.status(429).json({message: `You will have to wait ${Math.floor((10000 - timePassedBetweenRequests)/1000)} seconds to do another request`});
            } else {
              //  Everything seems OK => Send email
              req.session.sendChangePasswordTimestamp = Date.now();
              req.session.code = generateCode();
              const mailTemplate = `
                <h1>Welcome to Quotes Machine</h1>
                <p>Hello ${user.name}! In order to recover your password you should use the following code:</p>
                <h2>Code: ${req.session.code}</h2>
                <p>Thanks for coming back, we hope you enjoy it!</p>`;
              const emailSuccess = await mailer.sendEmail(user.email, 'Quotes machine password recovery', mailTemplate);
              if (emailSuccess.accepted[0] === `${user.email}`) {
                console.log(`Email sent to ${user.email}`);
                res.status(201).json({message: 'Email sent with the code'});  
                console.log(`code: ${req.session.code}`);
              } else {
                console.log('Mail rejected');
                res.status(500).json({message: `There was a problem sending the email, please try again`});  
              };  
            };
          }; 
        })
        .catch(err => {
          console.log(err);
          res.status(500).json({message: 'There was an error trying to find your account, please try again'});
        });
    };
  }
);

module.exports = sendChangePasswordRouter;