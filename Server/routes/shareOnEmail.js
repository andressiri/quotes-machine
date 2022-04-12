const express = require('express');
const shareOnEmailRouter = express.Router();
const rateLimiter = require('../config/requestsRateLimiter/rateLimiter.js');
const mailer = require('../config/mailer.js');
const checkAuthenticated = require('../config/checkAuthenticated.js');
const validateEmail = require('../functions/validateEmail.js');

// Share on email handle - @/share/email
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
    } else {
      // check at least 10 seconds have passed from last mail sent
      let timePassedBetweenRequests = 0;
      if (!req.session.shareOnEmailTimestamp) {
        req.session.shareOnEmailTimestamp = Date.now();
        timePassedBetweenRequests = 10000;
      } else {
        const auxDate = Date.now();
        timePassedBetweenRequests = auxDate - req.session.shareOnEmailTimestamp;
      };
      if (timePassedBetweenRequests < 10000) {
        console.log('Spam control');
        console.log(`You will have to wait ${Math.floor((10000 - timePassedBetweenRequests)/1000)} seconds to do another request`);
        res.status(429).json({message: `You will have to wait ${Math.floor((10000 - timePassedBetweenRequests)/1000)} seconds to do another request`});
      } else {
        //  Everything seems OK => Send email
        req.session.shareOnEmailTimestamp = Date.now();
        let quoteToShare = `
          <h2>"${req.body.content}"</h2>
          <h3>- ${req.body.author}</h3>`;
        if (req.body.image) {
          quoteToShare = `
            <img src="${req.body.image}" />
            <p>"${req.body.content}" - ${req.body.author}</p>`;
        };
        const mailTemplate = `
          <h1>Welcome to Quotes Machine</h1>
          <p>Hello there! I found this quote at <a href="http://quotesmachine.com" target="_blank" rel="noopenener noreferrer nofollow">Quotes Machine</a> and I wanted to share it with you!</p>
          ${quoteToShare}
          <p>Hope you like it!</p>
          <h6>${req.user.name}</h6>`;
        const emailSuccess = await mailer.sendEmail(req.body.email, `${req.user.name} shared a quote with you`, mailTemplate, req.user.email);
        if (emailSuccess.accepted[0] === `${req.body.email}`) {
          console.log(`Email sent to ${req.body.email}`);
          res.status(201).json({message: `Email sent to ${req.body.email}`});
        } else {
          console.log('Mail rejected');
          res.status(500).json({message: `There was a problem sending the email, please try again`});
        };
      };
    };
  }
);

module.exports = shareOnEmailRouter;