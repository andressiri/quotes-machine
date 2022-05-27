const express = require('express');
const passwordEditRouter = express.Router();
const bcrypt = require('bcryptjs');
const rateLimiter = require('../../../config/requestsRateLimiter/rateLimiter.js');
// User model
const User = require('../../../models/User.js');

// Handle password change - @/api/users/password/edit
passwordEditRouter.put('/',
  rateLimiter.max500RequestsPerday.prevent,
  rateLimiter.multipleClickingLimiter.prevent,
  (req, res) => {
    // check new password was sent by user
    if (!req.body.password) {
      console.log('No new password sent by user');
      res.status(400).json({message: 'Please send a new password'});
    } else {
      let newPassword = req.body.password;
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newPassword, salt, (err, hash) => {
          if (err) throw err;
          // Set password to hashed
          newPassword = hash;
          //  check the account required is registered and update the password if it is
          User.findOneAndUpdate({email: req.body.email}, {password: newPassword})
            .then(user => {
              if (!user) {
                console.log('User not found');
                res.status(404).json({message: 'There is no user with that email'});
              } else {
                console.log('Password updated');
                res.json({message: 'Password updated'});
              };
            })
            .catch(err => {
              console.log(err);
              res.status(500).json({message: 'There was an error updating your password, please try again'});
            });
        });
      });
    };
  }
);

module.exports = passwordEditRouter;