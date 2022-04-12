const express = require('express');
const sendVerificationCodeRouter = express.Router();
const rateLimiter = require('../../../../config/requestsRateLimiter/rateLimiter.js');
const checkAuthenticated = require('../../../../config/checkAuthenticated.js');
const canRequest = require('../../../../functions/canRequest.js');
const generateCode = require('../../../../functions/generateCode.js');
const getMailTemplate = require('./verificationCodeMailTemplate.js');
const mailer = require('../../../../config/mailer.js');

// Handle email verification request - @/users/email/send/verification-code
sendVerificationCodeRouter.get('/',
  rateLimiter.max500RequestsPerday.prevent,
  rateLimiter.multipleClickingLimiter.prevent,
  // prevent too many mail sents
  rateLimiter.tooManyMailsSent.prevent,
  checkAuthenticated,
  async (req, res) => {
    // check at least 10 seconds have passed from last mail sent
    if (canRequest(req, res, 'verificationCodeTimestamp', 10000)) {
      const {email, name} = req.user
      req.session.code = generateCode();
      const mailTemplate = getMailTemplate(name, req.session.code);
      const emailSuccess = await mailer.sendEmail(
        email,
        'Quotes machine email verification',
        mailTemplate
      );
      if (emailSuccess.accepted[0] === `${email}`) {
        console.log(`Email sent to ${email}`);
        res.status(201).json({message: 'Email sent with the code', userEmail: email});
        console.log(`code: ${req.session.code}`);
      } else {
        console.log('Mail rejected');
        res.status(500).json({message: `There was a problem sending the email, please try again`});
      };
    };
  }
);

module.exports = sendVerificationCodeRouter;