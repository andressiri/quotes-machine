const express = require('express');
const shareOnEmailRouter = express.Router();
const rateLimiter = require('../../config/requestsRateLimiter/rateLimiter.js');
const checkAuthenticated = require('../../config/checkAuthenticated.js');
const validateEmail = require('../../functions/validateEmail.js');
const canRequest = require('../../functions/canRequest.js');
const getMailTemplate = require('./shareOnEmailTemplate.js');
const mailer = require('../../config/mailer.js');

// Share on email handle - @/api/share/email
shareOnEmailRouter.post('/',
  rateLimiter.max500RequestsPerday.prevent,
  rateLimiter.multipleClickingLimiter.prevent,
  // prevent too many mail sents 
  rateLimiter.tooManyMailsSent.prevent,
  checkAuthenticated,
  async (req, res) => {
    // check correct data was sent in the request
    if (!req.body.email || !validateEmail(req.body.email)) {
      console.log('Not valid email');
      res.status(400).json({message: 'Please enter a valid email'});
    } else if (!req.body.content || !req.body.author) {
      console.log('No data to share');
      res.status(400).json({message: 'Please send the data required to share'});
      // check at least 10 seconds have passed from last mail sent
    } else if (canRequest(req, res, 'shareOnEmailTimestamp', 10000)) {
      const {email} = req.body
      const mailTemplate = getMailTemplate(req);
      const emailSuccess = await mailer.sendEmail(
        email,
        `${req.user.name} shared a quote with you`,
        mailTemplate,
        req.user.email
      );
      if (emailSuccess.accepted[0] === `${email}`) {
        console.log(`Email sent to ${email}`);
        res.status(201).json({message: `Email sent to ${email}`});
      } else {
        console.log('Mail rejected');
        res.status(500).json({message: `There was a problem sending the email, please try again`});
      };
    };
  }
);

module.exports = shareOnEmailRouter;