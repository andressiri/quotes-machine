const express = require('express');
const userQuoteSaveRouter = express.Router();
const rateLimiter = require('../../../config/requestsRateLimiter/rateLimiter.js');
const checkAuthenticated = require('../../../config/checkAuthenticated.js');
// User model
const User = require('../../../models/User.js');
// UserQuotes model
const UserQuotes = require('../../../models/UserQuotes.js');

// Handle quote saving - @/users/quote/save
userQuoteSaveRouter.put('/',
  rateLimiter.max2500RequestsPerday.prevent,
  rateLimiter.multipleClickingLimiter.prevent,
  checkAuthenticated,
  (req, res) => {
    // check data required for saving a new quote has been sent properly
    let notValidInfo = 'Not valid info';
    let newUserQuotes = {message: 'No proper quoteObj'};
    if (req.body.quoteObj && typeof req.body.quoteObj === 'object') {
      newUserQuotes = new UserQuotes({
        userId: req.user.id,
        quotesArray: [req.body.quoteObj]
      });
      notValidInfo = newUserQuotes.validateSync(); // it returns undefined if validation was passed - no errors
    };
    if (typeof notValidInfo !== 'undefined') {
      console.log('Bad request'),
      res.status(400).json({message: 'Please send all the information required'});
    
      // check if it is the first quote saved
    } else if (req.user.userQuotesId === 'Create userQuotes at first save') {
      newUserQuotes.save()
        .then(() => {
          User.findByIdAndUpdate(req.user, {userQuotesId: newUserQuotes.id})
            .then(() => {
              console.log('Document created and Quote saved successfully');
              res.status(201).json({message: 'Quote saved successfully'});
            })
            .catch(err => {
              console.log(err);
              res.status(500).json({message: 'There was an error saving the quote, please try again'});
            });
        })
        .catch(err => {
          console.log(err);
          res.status(500).json({message: 'There was an error saving the quote, please try again'});
        });

      // just save the new quote updating the array
    } else {
      UserQuotes.findOne({userId: req.user.id})
        .then(userQ => {
          userQ.quotesArray.push(req.body.quoteObj);
          userQ.save();
          console.log('Quote saved successfully');
          res.status(201).json({message: 'Quote saved successfully'});
        })
        .catch(err => {
          console.log(err);
          res.status(500).json({message: 'There was an error saving the quote, please try again'});
        });
    };
  }
);

module.exports = userQuoteSaveRouter;