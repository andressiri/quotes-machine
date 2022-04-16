const express = require('express');
const nameEditRouter = express.Router();
const checkAuthenticated = require('../../../config/checkAuthenticated.js');
const rateLimiter = require('../../../config/requestsRateLimiter/rateLimiter.js');
// User model
const User = require('../../../models/User.js');

// Handle user name change - @/api/users/name/edit
nameEditRouter.put('/',
  rateLimiter.max500RequestsPerday.prevent,
  rateLimiter.multipleClickingLimiter.prevent,
  checkAuthenticated,
  (req, res) => {
    // check new name was sent by user
    if (!req.body.name) {
      console.log('No new name sent by user');
      res.status(400).json({message: 'Please enter a new name'});
    } else {
      // check the account required is registered and update the password if it is
      User.findOneAndUpdate({id: req.user.id}, {name: req.body.name})
        .then(user => {
          if (!user) {
            console.log('User not found');
            res.status(404).json({message: 'We could not find your account'});
          } else {
            console.log('Name changed');
            res.json({message: 'Name changed'});
          };
        })
        .catch(err => {
          console.log(err);
          res.status(500).json({message: 'There was an error updating your name, please try again'});
        });
    };
  }
);

module.exports = nameEditRouter;