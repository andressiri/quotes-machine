const express = require("express");
const loginRouter = express.Router();
const rateLimiter = require('../../config/requestsRateLimiter/rateLimiter.js');

// Login handle - Authorization
loginRouter.post('/',
  rateLimiter.max500RequestsPerday.prevent,
  // different multiple clicking limiter, bacause login makes a two consecutive requests.
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
      let status = 500;
      switch (msg[0]) {
        case 'Please fill all the fields': status = 400; break;
        case 'Please enter a valid email': status = 400; break;
        case 'Login success': status = 200; break;
        case 'That email is not registered': status = 404; break;
        case 'Password incorrect': status = 401; break;
        default: status = 500;
      };     
      if (req.user) {if (req.user.verifiedEmail) verified = true;};
      res.status(status).json({verified: verified, message: msg[0]});
    };
  }
);

module.exports = loginRouter;