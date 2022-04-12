const express = require('express');
const registerRouter = express.Router();
const bcrypt = require('bcryptjs');
const rateLimiter = require('../../config/requestsRateLimiter/rateLimiter.js');
const validateEmail = require('../../functions/validateEmail.js');
// User model
const User = require('../../models/User.js');

// Register handle - @/users/register
registerRouter.post('/',
  rateLimiter.max500RequestsPerday.prevent,
  rateLimiter.multipleClickingLimiter.prevent,
  rateLimiter.tooManyRegistrations.prevent,
  (req, res) => {
    // Check required data was sent in the request
    if (!req.body.name || !req.body.email || !req.body.password || !validateEmail(req.body.email) || !req.body.userOptions) {
      let msg = 'Please send all the information required';
      if (req.body.email && !validateEmail(req.body.email)) msg = 'Please enter a valid email';
      console.log('Bad request');
      res.status(400).json({message: msg});
    } else {
      const { name, email, password, userOptions } = req.body;
      User.findOne({email: email})
        .then(user => {
          if (user) {
            // User Exists
            console.log('Email is already registered');
            res.status(409).json({message: 'Email is already registered'});
          } else {
            let notValidInfo = 'Not valid info';
            const newUser = new User({
              name: name,
              email: email,
              verifiedEmail: false,
              password: password,
              userQuotesId: 'Create userQuotes at first save',
              userOptions: userOptions
            });
            //  Validate data to save
            notValidInfo = newUser.validateSync(); // will return undefined if newUser passes User model requirements
            if (typeof notValidInfo !== 'undefined') {
              console.log('Not valid info'),
              res.status(400).json({message: 'Could not validate information sent'});
            } else {
              // Hash Password
              bcrypt.genSalt(10, (err, salt) =>
              bcrypt.hash(newUser.password, salt, (err, hash) => {
                if (err) throw err;
                // Set password to hashed
                newUser.password = hash;
                // Save user
                newUser.save()
                  .then( user => {
                    console.log(`New user registered successfully ${newUser}`);
                    res.status(201).json({message: `${user.name} was registered successfully`});
                  })
                  .catch(err => {
                    console.log(err);
                    res.status(500).json({message: 'There was an error saving your registration, please try again'});
                  });
              }));
            };
          };
        })
        .catch(err => {
          console.log(err);
          res.status(500).json({message: 'There was an error with your registration, please try again'});
        });
    };
  }
);

module.exports = registerRouter;