const express = require('express');
const saveQuoteRouter = express.Router();
const rateLimiter = require('../../config/requestsRateLimiter/rateLimiter.js');

// User model
const User = require('../../models/User.js');
// UserQuotes model
const UserQuotes = require('../../models/UserQuotes.js');

saveQuoteRouter.put('/', 
  rateLimiter.max500RequestsPerday.prevent,
  rateLimiter.multipleClickingLimiter.prevent,
  (req, res) => {
    if (!req.user) {
      console.log('Not logged in');
      res.status(428).json({message: 'You should be logged in order to do this'})        
    } else {
      // check data required for saving a new quote has been sent
      const newUserQuotes = new UserQuotes({
        userId: req.user.id,
        quotesArray: [req.body.quoteObj]
      });
      const validationError = newUserQuotes.validateSync();
      if (validationError) {
        console.log('Bad request'),
        res.status(400).json({message: 'Please send all the information required'});
      } else if (req.user.userQuotesId === 'Create userQuotes at first save') {         
        newUserQuotes.save()
          .then(() => {
            User.findByIdAndUpdate(req.user, {userQuotesId: newUserQuotes.id})
              .then(() => {
                console.log('Document created and Quote saved successfully');
                res.status(201).json({message: 'Quote saved successfully'});
              })
              .catch(err => console.log(err));
          })
          .catch(err => console.log(err));
      } else {
        UserQuotes.findOne({userId: req.user.id})
          .then(userQ => {
            userQ.quotesArray.push(req.body.quoteObj);
            userQ.save();
            console.log('Quote saved successfully');
            res.status(201).json({message: 'Quote saved successfully'});
          })
          .catch(err => console.log(err)); 
      };    
    };
  }
);

module.exports = saveQuoteRouter;