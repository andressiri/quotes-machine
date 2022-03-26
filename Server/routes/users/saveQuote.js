const express = require('express');
const saveQuoteRouter = express.Router();
const rateLimiter = require('../../config/requestsRateLimiter/rateLimiter.js');
const checkAuthenticated = require('../../config/checkAuthenticated.js');

// User model
const User = require('../../models/User.js');
// UserQuotes model
const UserQuotes = require('../../models/UserQuotes.js');

saveQuoteRouter.put('/', 
  rateLimiter.max500RequestsPerday.prevent,
  rateLimiter.multipleClickingLimiter.prevent,
  checkAuthenticated,
  (req, res) => {
    // check data required for saving a new quote has been sent
    let notValidInfo = 'Not valid info';
    if (req.body.quoteObj && typeof req.body.quoteObj === 'object') {
      const newUserQuotes = new UserQuotes({
        userId: req.user.id,
        quotesArray: [req.body.quoteObj]
      });
      notValidInfo = newUserQuotes.validateSync(); // it returns undefined if validation was passed - no errors
    };
    if (typeof notValidInfo !== 'undefined') {
      console.log('Bad request'),
      res.status(412).json({message: 'Please send all the information required'});
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

module.exports = saveQuoteRouter;