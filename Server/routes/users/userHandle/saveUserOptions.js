const express = require('express');
const saveUserOptionsRouter = express.Router();
const rateLimiter = require('../../../config/requestsRateLimiter/rateLimiter.js');
const checkAuthenticated = require('../../../config/checkAuthenticated.js');
const generateCode = require('../../../functions/generateCode.js');

// User model
const User = require('../../../models/User.js');

saveUserOptionsRouter.put('/',
  rateLimiter.max2500RequestsPerday.prevent,
  rateLimiter.multipleClickingLimiter.prevent,
  checkAuthenticated,
  (req, res) => {
    console.log(req.body.userOptions);
    // check correct data required for updating a quote has been sent
    let notValidInfo = 'Not valid info';
    let validationUserOptions = {message: 'No proper userOptions'};
    if (req.body.userOptions && typeof req.body.userOptions === 'object') {
      const random = generateCode();
      const random2 = generateCode();
      const random3 = generateCode();
      validationUserOptions = new User({
        name: 'Jhon Doe',
        email: `someEmail${random}@${random2}.${random3}`,
        verifiedEmail: false,
        password: `${random2}${random}${random3}`,
        userQuotesId: 'No id, just testing',
        userOptions: req.body.userOptions
      });
      notValidInfo = validationUserOptions.validateSync(); // it returns undefined if validation was passed - no errors
    };
    if (typeof notValidInfo !== 'undefined') {
      console.log('Bad request'),
      res.status(412).json({message: 'Please send all the information required'});
    } else {
      User.findById(req.user.id)
        .then(user => {
          user.userOptions = req.body.userOptions;
          user.save();
          console.log('User options have been saved');
          res.status(201).json({message: 'Options have been saved', success: true});
        })
        .catch(err => {
          console.log(err);
          res.status(500).json({message: 'There was an error saving the options'});
        });
    };
  }
);

module.exports = saveUserOptionsRouter;