const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const passport = require('passport');

// User model
const User = require('../models/User.js');

// Register Handle
router.post("/register", (req, res) => {
  const { name, email, password } = req.body;

  User.findOne({ email: email})
    .then(user => {
      if (user) {
        // User Exists
        res.json({msg: 'Email is already registered'});
      } else {
        const newUser = new User({
          name: name,
          email: email,
          verifiedEmail: false,
          password: password
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
                console.log(`New user registered successfully ${newUser}`)
                res.json({msg: 'Registered successfully', verifiedEmail: user.verifiedEmail});
              })
              .catch(err => console.log(err));
        }));
      }
    })
    .catch(err => console.log(err));
});

// Login Handle
router.post('/login', (req, res, next) => {
  passport.authenticate('local', function (err, user, info) {
    if (err) return next(err);
    return res.json({user, info});
  })(req, res, next);
});

// Email Verification Handle
router.get('/sendVerifyEmail', (req, res) => {
  //check delay to control spam
  //if (not ok) response: wait...
  //else
  //send email
  //catch errors
  //send response
  res.json({message: 'Email sent'});  
  console.log('code: 123456')
});

router.post('/verifyEmail', (req, res) => {
  //check code with code sent - hash and salt?
  // if (not ok) response: Incorrect code...
  //else
  //update user in database
  //send response
  res.json({message: 'Code is correct'});
  console.log('Email verified');
});


module.exports = router;
