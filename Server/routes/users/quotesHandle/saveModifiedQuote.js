const express = require('express');
const saveModifiedQuoteRouter = express.Router();
const rateLimiter = require('../../../config/requestsRateLimiter/rateLimiter.js');
const checkAuthenticated = require('../../../config/checkAuthenticated.js');

// UserQuotes model
const UserQuotes = require('../../../models/UserQuotes.js');

saveModifiedQuoteRouter.put('/', 
  rateLimiter.max2500RequestsPerday.prevent,
  rateLimiter.multipleClickingLimiter.prevent,
  checkAuthenticated,
  (req, res) => {
    // check data required for updating a quote has been sent
    let notValidInfo = 'Not valid info';
    let validationUserQuotes = {message: 'No proper quoteObj'};
    if (req.body.quoteObj && typeof req.body.quoteObj === 'object') {
      validationUserQuotes = new UserQuotes({
        userId: req.user.id,
        quotesArray: [req.body.quoteObj]
      });
      notValidInfo = validationUserQuotes.validateSync(); // it returns undefined if validation was passed - no errors
    };
    if (typeof notValidInfo !== 'undefined') {
      console.log('Bad request'),
      res.status(412).json({message: 'Please send all the information required'});
    } else {
      UserQuotes.findOne({userId: req.user.id})
        .then(userQ => {
          // search index of quote to be modified and update it
          const index = userQ.quotesArray.map(quote => {
            return quote.id;
          }).indexOf(req.body.quoteObj._id);
          userQ.quotesArray[index] = req.body.quoteObj;
          userQ.save();
          console.log('Quote changes saved successfully');
          res.status(201).json({message: 'Quote changes saved successfully'});
        })
        .catch(err => {
          console.log(err);
          res.status(500).json({message: 'There was an error finding or updating the quote'});
        });
          
    };
  }  
);

module.exports = saveModifiedQuoteRouter;