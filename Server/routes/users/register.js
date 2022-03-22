const express = require("express");
const registerRouter = express.Router();
const rateLimiter = require('../../config/requestsRateLimiter/rateLimiter.js');
const bcrypt = require('bcryptjs');
const validateEmail = require('../../functions/validateEmail.js');

// User model
const User = require('../../models/User.js');

// Register handle
registerRouter.post('/',
  rateLimiter.max500RequestsPerday.prevent,
  rateLimiter.multipleClickingLimiter.prevent,
  rateLimiter.tooManyRegistrations.prevent,
  (req, res) => {
    // Check correct data was sent in the request
    if (!req.body.name || !req.body.email || !req.body.password || !validateEmail(req.body.email)) {
      let msg = 'Please send all the information required';
      if (req.body.email && !validateEmail(req.body.email)) msg = 'Please enter a valid email';
      console.log('Bad request');
      res.status(400).json({message: msg});
    } else {
      const { name, email, password } = req.body;
      User.findOne({ email: email})
        .then(user => {
          if (user) {
            // User Exists
            console.log('Email taken');
            res.status(409).json({message: 'Email is already registered'});
          } else {
            const newUser = new User({
              name: name,
              email: email,
              verifiedEmail: false,
              password: password,
              userQuotesId: 'Create userQuotes at first save'
            });
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
                  .catch(err => console.log(err));
            }));
          }
        })
        .catch(err => console.log(err));
    };
  }
);

module.exports = registerRouter;