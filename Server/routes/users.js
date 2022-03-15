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
router.post("/loginAuth", (req, res, next) => {
  passport.authenticate('local')(req,res,next);
});

router.post('/login', (req, res) => {
  console.log(req.session);
  const msg = req.flash('message');
  let verified = false;
  if (req.user) {
    if (req.user.verifiedEmail) {
      verified = true;
    };
  };
  res.json({verified: verified, message: msg[0]});
});

// Log out handle
router.delete('/logout', (req, res) => {
  req.logOut();
  req.session.destroy();
  console.log('User logged out');
});

// Email Verification Handle
router.get('/sendVerifyEmail', (req, res) => {
  //check delay to control spam
  //if (not ok) response: wait...
  //else
  const randomNum = Math.floor(Math.random() * 1000000); 
  req.session.code = randomNum.toString();
  //send email
  //catch errors
  //send response
  res.json({message: 'Email sent'});  
  console.log(`code: ${req.session.code}`);
});

router.put('/verifyEmail', async (req, res) => {
  if (req.body.code !== req.session.code) {
    res.json({message: 'Wrong code'});
    console.log('Wrong code');
  } else {
    await User.updateOne({email: req.user.email}, {verifiedEmail: true})
      .catch(err => console.log(err));
    res.json({message: 'Code is correct'});
    console.log('Email verified');
  };
});


module.exports = router;
