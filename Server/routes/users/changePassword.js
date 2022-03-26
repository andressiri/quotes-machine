const express = require("express");
const changePasswordRouter = express.Router();
const bcrypt = require('bcryptjs');
const rateLimiter = require('../../config/requestsRateLimiter/rateLimiter.js');

// User model
const User = require('../../models/User.js');

// Logout and session reset handle
changePasswordRouter.put('/',
  rateLimiter.max500RequestsPerday.prevent,
  rateLimiter.multipleClickingLimiter.prevent,
  async (req, res) => {
    // check new password was sent
    if (!req.body.password) {
      console.log('No password sent');
      res.status(412).json({message: 'Please enter a new password'});
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
                console.log('Password changed');
                res.status(201).json({message: 'Password changed'}); 
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

module.exports = changePasswordRouter;