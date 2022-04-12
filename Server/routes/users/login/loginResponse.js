const express = require('express');
const loginResponseRouter = express.Router();
const rateLimiter = require('../../../config/requestsRateLimiter/rateLimiter.js');

// Login handle - @/users/login/response
loginResponseRouter.post('/',
  rateLimiter.max500RequestsPerday.prevent,
  // different multiple clicking limiter, bacause login makes two consecutive requests.
  rateLimiter.extraMultipleClickingLimiter.prevent,
  // prevent too many attempts for the same username from the same ip
  rateLimiter.tooManyAttempts.prevent,
  (req, res) => {
    const msg = req.flash('message');
    // check if authentication was requested first
    if (!msg[0] && !req.isAuthenticated()) {
      console.log('No user authenticated');
      res.status(428).json({message: 'Need to authenticate a user first'});
    } else {
      let verified = false;
      let userOptions = {message: 'No user options found'};
      let status = 500;
      switch (msg[0]) {
        case 'Please fill all the fields': status = 400; break;
        case 'Please enter a valid email': status = 400; break;
        case 'Login success': status = 200; break;
        case 'That email is not registered': status = 404; break;
        case 'Password incorrect': status = 401; break;
        // no default
      };
      if (req.user) {
        if (req.user.verifiedEmail) verified = true;
        if (req.user.userOptions) userOptions = {message: 'User options loaded', userOptionsObj: req.user.userOptions};
      };
      res.status(status).json({message: msg[0], verified: verified, userOptions: userOptions});
    };
  }
);

module.exports = loginResponseRouter;