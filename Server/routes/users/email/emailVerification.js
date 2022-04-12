const express = require('express');
const emailVerificationRouter = express.Router();
const rateLimiter = require('../../../config/requestsRateLimiter/rateLimiter.js');
// User model
const User = require('../../../models/User.js');

// Email verification handle - @/users/email/verification
emailVerificationRouter.put('/',
  rateLimiter.max500RequestsPerday.prevent,
  rateLimiter.multipleClickingLimiter.prevent,
  // prevent too many emails sent
  rateLimiter.tooManyAttempts.prevent,
  (req, res) => {
    // check the user sent a code
    if (!req.body.code) {
      console.log('No code sent by the user');
      res.status(400).json({message: 'Please enter the code sent to your email'});
    // check there is a code sent to the user to compare
    } else if (!req.session.code) {
      console.log('No code required');
      res.status(428).json({message: 'No code was required before'});
    // compare codes
    } else if (req.body.code !== req.session.code) {
      console.log('Code doesn\'t match');
      res.status(401).json({message: 'Code doesn\'t match'});
    } else {
      // check there is an account required to verify
      let userToUpdate = req.body.email;
      if (req.user) userToUpdate = req.user.email;
      if (!userToUpdate) {
        console.log('There is no mail specified');
        res.status(400).json({message: 'There is no mail specified'});
      } else {
        // check at least 5 seconds have passed from last failed code comparison - TODO: modularize this logic
        let timePassedBetweenRequests = 0;
        if (!req.session.checkCodeTimestamp) {
          req.session.checkCodeTimestamp = Date.now();
          timePassedBetweenRequests = 5000;
        } else {
          const auxDate = Date.now();
          timePassedBetweenRequests = auxDate - req.session.checkCodeTimestamp;
        };
        if (timePassedBetweenRequests < 5000) {
          console.log('Spam control');
          console.log(`You will have to wait ${Math.floor((5000 - timePassedBetweenRequests)/1000)} seconds to do another request`);
          res.status(429).json({message: `You will have to wait ${Math.floor((5000 - timePassedBetweenRequests)/1000)} seconds to do another request`});
        } else {
          req.session.checkCodeTimestamp = Date.now();
          //  check the account required is registered and update as verified if it is
          User.findOneAndUpdate({email: userToUpdate}, {verifiedEmail: true})
            .then(user => {
              if (!user) {
                console.log('User not found');
                res.status(404).json({message: 'There is no user with that email'});
              } else {
                res.json({message: 'Code is correct, email verified'});
                console.log('Email verified');
              };
            })
            .catch(err => {
              console.log(err);
              res.status(500).json({message: 'There was an error verifying your email, please try again'});
            });
        };
      };
    };
  }
);

module.exports = emailVerificationRouter;