const express = require('express');
const sendPasswordResetCodeRouter = express.Router();
const rateLimiter = require('../../../../config/requestsRateLimiter/rateLimiter.js');
const validateEmail = require('../../../../functions/validateEmail');
const canRequest = require('../../../../functions/canRequest.js');
const generateCode = require('../../../../functions/generateCode.js');
const getMailTemplate = require('./passwordResetMailTemplate');
const mailer = require('../../../../config/mailer.js');
// User model
const User = require('../../../../models/User.js');

// Handle password reset request - @/email/send/password-reset-code
sendPasswordResetCodeRouter.post('/',
  rateLimiter.max500RequestsPerday.prevent,
  rateLimiter.multipleClickingLimiter.prevent,
  // prevent too many mails sent
  rateLimiter.tooManyMailsSent.prevent,
  (req, res) => {
      // check correct data was sent in the request
    if (!req.body.email || !validateEmail(req.body.email)) {
      console.log('Not valid email');
      res.status(400).json({message: 'Please enter a valid email'});
    } else {
      const {email} = req.body.email
      // check if user to change password exists
      User.findOne({email: email})
        .then(async (user) => {
          if (!user) {
            console.log(`${email} is not registered`);
            res.status(404).json({message: `${email} is not registered`});
            // check at least 10 seconds have passed from last mail sent
          } else if (canRequest(req, res, 'passwordResetTimestamp', 10000)) {
            // send code
            req.session.code = generateCode();
            const mailTemplate = getMailTemplate(user.name, req.session.code);
            const emailSuccess = await mailer.sendEmail(
              email,
              'Quotes machine password recovery',
              mailTemplate
            );
            if (emailSuccess.accepted[0] === `${email}`) {
              console.log(`Email sent to ${email}`);
              res.status(201).json({message: 'Email sent with the code'});
              console.log(`code: ${req.session.code}`);
            } else {
              console.log('Mail rejected');
              res.status(500).json({message: `There was a problem sending the email, please try again`});
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

module.exports = sendPasswordResetCodeRouter;