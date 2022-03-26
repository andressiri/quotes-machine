const express = require("express");
const loginAuthRouter = express.Router();
const passport = require('passport');
const rateLimiter = require('../../config/requestsRateLimiter/rateLimiter.js');
const validateEmail = require('../../functions/validateEmail.js');

// Register handle - Authentication
loginAuthRouter.post('/',
  rateLimiter.max500RequestsPerday.prevent,
  rateLimiter.multipleClickingLimiter.prevent,
  // prevent too many attempts for the same username from the same ip
  rateLimiter.tooManyRequestsForUser.getMiddleware({key: (req, res, next) => next(req.body.email)}),
  (req, res, next) => {
    // Check correct data was sent in the request
    if (!req.body.email || !req.body.password || !validateEmail(req.body.email)) {
      let msg = 'Please fill all the fields';
      if (req.body.email && !validateEmail(req.body.email)) msg = 'Please enter a valid email'; 
      console.log('Bad request');
      req.flash('message', msg);
      res.status(412).json({message: msg});
    } else {
      // Autheticate with passport to create session
      passport.authenticate('local', {
      successRedirect: "/",  
      failureRedirect: "/",
      failureMessage: false})
      (req,res,next);
    };
  }
);

module.exports = loginAuthRouter;