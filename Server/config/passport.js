const LocalStrategy = require("passport-local").Strategy;
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

// Load User Model
const User = require("../models/User.js");

module.exports = passport => {
  passport.use(
    new LocalStrategy({ passReqToCallback: true, usernameField: "email" }, (req, email, password, done) => {
      // Match User
      User.findOne({ email: email })
        .then((user) => {
          if (!user) {
            console.log('User not found');
            req.flash('message', 'That email is not registered');
            return done(null, false);
          };
          // Match password
          bcrypt.compare(password, user.password, (err, isMatch) => {
            if (err) throw err;
            if (isMatch) {
              console.log('Login success');
              req.flash('message', 'Login success');
              return done(null, user);
            } else {
              console.log('Password does not match');
              req.flash('message', 'Password incorrect');
              return done(null, false);
            }
          });
        })
        .catch(err => console.log(err));
    })
  );

  passport.serializeUser((user, done) => {
    console.log('Serialize user');
    done(null, user.id);
  });
  
  passport.deserializeUser((id, done) => {
    console.log('Deserialize user');
    User.findById(id, (err, user) => {      
      done(err, user);
    });
  });
  
};
