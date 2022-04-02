const express = require('express');
const verifyEmailRouter = express.Router();
const rateLimiter = require('../../../config/requestsRateLimiter/rateLimiter.js');

// User model
const User = require('../../../models/User.js');

// Logout and session reset handle
verifyEmailRouter.put('/',
  rateLimiter.max500RequestsPerday.prevent,
  rateLimiter.multipleClickingLimiter.prevent,
  // prevent too many mails sent
  rateLimiter.tooManyAttempts.prevent,
  (req, res) => {
    // check a code was sent
    if (!req.body.code) {
      console.log('No code sent');
      res.status(412).json({message: 'Please enter the code sent to your email'});
    // check there is a code to compare
    } else if (!req.session.code) {
      console.log('No code required');
      res.status(428).json({message: 'No code was required before'});
    // compare codes
    } else if (req.body.code !== req.session.code) {
      console.log('Wrong code');
      res.status(401).json({message: 'Wrong code'});
    } else {
      // check there is an account required to verify
      let userToUpdate = req.body.email;
      if (req.user) userToUpdate = req.user.email;
      if (!userToUpdate) {
        console.log('Bad request');
        res.status(400).json({message: 'There is no account specified'});
      } else {
        // check at least 5 seconds have passed from last failed code comparison
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
                res.json({message: 'Code is correct', success: true});
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

module.exports = verifyEmailRouter;