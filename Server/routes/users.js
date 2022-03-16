const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const passport = require('passport');
const transporter = require('../config/mailer.js');

// User model
const User = require('../models/User.js');
const { json } = require("express");

// Valid email verification
const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(/^[a-z0-9\+\.~_\-]+@[a-z0-9\-]+(?:\.[a-z0-9\-]+)+$/);
};

// Register Handle
router.post("/register", (req, res) => {
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
                  console.log(`New user registered successfully ${newUser}`);
                  res.status(201).json({message: `${user.name} was registered successfully`});
                })
                .catch(err => console.log(err));
          }));
        }
      })
      .catch(err => console.log(err));
  };
});

// Login Handle
router.post("/loginAuth", (req, res, next) => {
  if (!req.body.email || !req.body.password || !validateEmail(req.body.email)) {
    let msg = 'Please fill all the fields';
    if (req.body.email && !validateEmail(req.body.email)) msg = 'Please enter a valid email'; 
    console.log('Bad request');
    req.flash('message', msg);
    res.status(400).json({message: msg});
  } else {
    passport.authenticate('local', {
    successRedirect: "/",  
    failureRedirect: "/",
    failureMessage: false})
    (req,res,next);
  };
});

router.post('/login', (req, res) => {
  console.log(req.session);
  const msg = req.flash('message');
  let verified = false;
  let status = 500;
  switch (msg[0]) {
    case 'Please fill all the fields': status = 400; break;
    case 'Please enter a valid email': status = 400; break;
    case 'Login success': status = 200; break;
    case 'That email is not registered': status = 404; break;
    case 'Password incorrect': status = 401; break;
    default: status = 500;
  };     
  if (req.user) {if (req.user.verifiedEmail) verified = true;};
  res.status(status).json({verified: verified, message: msg[0]});
});

// Log out handle
router.delete('/logout', (req, res) => {
  req.logOut();
  req.session.destroy();
  console.log('User logged out');
  res.json({message: 'User logged out'});
});

// Email Verification Handle
  
  //  generate code
const generateCode = () => {
  const randomNum = Math.floor(Math.random() * 1000000);
  let auxString = randomNum.toString();
  while (auxString.length < 6) {
    auxString = `0${auxString}`;
  };
  return auxString; 
};

  //  send email
const sendEmail = async (sendTo, subject, mailTemplate) => {
  const mail = await transporter.sendMail({
    from: 'siri.andres.l@gmail.com', 
    to: sendTo, 
    subject: subject,
    html: mailTemplate 
  });
}; 

  //  email verification
router.get('/sendVerifyEmail', async (req, res) => {
  if (!req.user) {
    console.log('Not logged in');
    res.status(428).json({message: 'You should be logged in order to do this'})
  } else {
    let timePassedBetweenRequests = 0;
    if (!req.session.sendVerifyEmailTimestamp) {
      req.session.sendVerifyEmailTimestamp = Date.now();
      timePassedBetweenRequests = 10000;
    } else {
      const auxDate = Date.now();
      timePassedBetweenRequests = auxDate - req.session.sendVerifyEmailTimestamp;
    };
    if (timePassedBetweenRequests < 10000) {
      console.log('Spam control');
      console.log(`You will have to wait ${Math.floor((10000 - timePassedBetweenRequests)/1000)} seconds to do another request`);
      res.status(429).json({message: `You will have to wait ${Math.floor((10000 - timePassedBetweenRequests)/1000)} seconds to do another request`});
    } else {
      req.session.sendVerifyEmailTimestamp = Date.now();
      req.session.code = generateCode();
      const mailTemplate = `
        <h1>Welcome to Quotes Machine</h1>
        <p>Hello ${req.user.name}! In order to verify your account you should use the following code:</p>
        <h2>Code: ${req.session.code}</h2>
        <p>Thanks for joining us, we hope you enjoy it!</p>`;
      sendEmail(req.user.email, 'Quotes machine email verification', mailTemplate);
      console.log('Email sent');
      res.status(201).json({message: 'Email sent'});  
      console.log(`code: ${req.session.code}`);
    };
  };
});

  //  password recovery
router.post('/sendChangePassword', async (req, res) => {
    //  check for correct request
  if (!req.body.email || !validateEmail(req.body.email)) {
    console.log('Not valid email');
    res.status(400).json({message: 'Please enter a valid email'});
  } else {
    await User.findOne({email: req.body.email})
    .then((user) => {
      if (!user) {
        console.log('Email not registered');
        res.status(404).json({message: 'That email is not registered'});
      } else {
        let timePassedBetweenRequests = 0;
        if (!req.session.sendChangePasswordTimestamp) {
          req.session.sendChangePasswordTimestamp = Date.now();
          timePassedBetweenRequests = 10000;
        } else {
          const auxDate = Date.now();
          timePassedBetweenRequests = auxDate - req.session.sendChangePasswordTimestamp;
        };
        if (timePassedBetweenRequests < 10000) {
          console.log('Spam control');
          console.log(`You will have to wait ${Math.floor((10000 - timePassedBetweenRequests)/1000)} seconds to do another request`);
          res.status(429).json({message: `You will have to wait ${Math.floor((10000 - timePassedBetweenRequests)/1000)} seconds to do another request`});
        } else {
          req.session.sendChangePasswordTimestamp = Date.now();
          req.session.code = generateCode();
          const mailTemplate = `
            <h1>Welcome to Quotes Machine</h1>
            <p>Hello ${user.name}! In order to recover your password you should use the following code:</p>
            <h2>Code: ${req.session.code}</h2>
            <p>Thanks for coming back, we hope you enjoy it!</p>`;
          sendEmail(user.email, 'Quotes machine password recovery', mailTemplate);
          console.log('Email sent');
          res.status(201).json({message: 'Email sent'});  
          console.log(`code: ${req.session.code}`);
        };
      }; 
    })
    .catch(err => console.log(err));
  };
});

  //  check code
router.put('/verifyEmail', async (req, res) => {
  if (!req.body.code) {
    console.log('No code sent');
    res.status(400).json({message: 'Please enter the code sent to your email'});
  } else if (!req.session.code) {
    console.log('No code required');
    res.status(428).json({message: 'No code was required before'});
  } else if (req.body.code !== req.session.code) {
    console.log('Wrong code');
    res.status(401).json({message: 'Wrong code'});
  } else {
    let userToUpdate = req.body.email;
    if (req.user) userToUpdate = req.user.email;
    if (!userToUpdate) {
      console.log('Bad request');
      res.json(400).json({message: 'There is no account specified'});
    } else {
      await User.findOneAndUpdate({email: userToUpdate}, {verifiedEmail: true})
      .then(user => {
        if (!user) {
          console.log('User not found');
          res.status(404).json({message: 'There is no user with that email'});
        } else {  
          res.json({message: 'Code is correct'});
          console.log('Email verified');
        };  
      })
      .catch(err => console.log(err));
    };
  };
});

// Change Password
router.put('/changePassword', async (req, res) => {
  if (!req.body.password) {
    console.log('No password sent');
    res.status(400).json({message: 'Please enter a new password'});
  } else {
    let newPassword = req.body.password;
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newPassword, salt, (err, hash) => {
        if (err) throw err;
        // Set password to hashed
        newPassword = hash;
        User.findOneAndUpdate({email: req.body.email}, {password: newPassword})
        .then((user) => {
          if (!user) {
            console.log('User not found');
            res.status(404).json({message: 'There is no user with that email'});
          } else {
            console.log('Password changed');
            res.status(201).json({message: 'Password changed'}); 
          };
        })
        .catch(err => console.log(err));
      });     
    });
  }; 
});


module.exports = router;
