const express = require('express');
const saveModifiedQuoteRouter = express.Router();
const rateLimiter = require('../../config/requestsRateLimiter/rateLimiter.js');

// UserQuotes model
const UserQuotes = require('../../models/UserQuotes.js');

saveModifiedQuoteRouter.put('/', 
  rateLimiter.max500RequestsPerday.prevent,
  rateLimiter.multipleClickingLimiter.prevent,
  (req, res) => {
    if (!req.user) {
      console.log('Not logged in');
      res.status(428).json({message: 'You should be logged in order to do this'})    
    } else {
      // check data required for updating a quote has been sent
      const validationUserQuotes = new UserQuotes({
        userId: req.user.id,
        quotesArray: [req.body.quoteObj]
      });
      const validationError = validationUserQuotes.validateSync();
      // check index required for process had been sent ---> better change it for quote id
      if (validationError) {
        console.log('Bad request'),
        res.status(400).json({message: 'Please send all the information required'});
      } else {
        UserQuotes.findOne({userId: req.user.id})
          .then(userQ => {
            // index of id
            userQ.quotesArray[req.body.index] = req.body.quoteObj;
            userQ.save();
            console.log('Quote chenges saved successfully');
            res.status(201).json({message: 'Quote changes saved successfully'});
          })
          .catch(err => console.log(err));
      };    
    };  
  }
);

module.exports = saveModifiedQuoteRouter;