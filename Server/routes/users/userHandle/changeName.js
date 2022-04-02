const express = require('express');
const changeNameRouter = express.Router();
const checkAuthenticated = require('../../../config/checkAuthenticated.js');
const rateLimiter = require('../../../config/requestsRateLimiter/rateLimiter.js');

// User model
const User = require('../../../models/User.js');

// Logout and session reset handle
changeNameRouter.put('/',
  rateLimiter.max500RequestsPerday.prevent,
  rateLimiter.multipleClickingLimiter.prevent,
  checkAuthenticated,
  (req, res) => {
    // check new name was sent
    if (!req.body.name) {
      console.log('No name sent');
      res.status(412).json({message: 'Please enter a new name'});
    } else {
      //  check the account required is registered and update the password if it is
      User.findOneAndUpdate({id: req.user.id}, {name: req.body.name})
        .then(user => {
          if (!user) {
            console.log('User not found');
            res.status(404).json({message: 'We could not find your account'});
          } else {
            console.log('Name changed');
            res.status(201).json({message: 'Name changed'});
          };
        })
        .catch(err => {
          console.log(err);
          res.status(500).json({message: 'There was an error updating your name, please try again'});
        });
    };
  }
);

module.exports = changeNameRouter;