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
                res.json({msg: 'Registered successfully'});
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
    return res.json(info);
  })(req, res, next);
});


module.exports = router;
