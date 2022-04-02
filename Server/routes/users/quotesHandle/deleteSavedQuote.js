const express = require('express');
const deleteSavedQuoteRouter = express.Router();
const rateLimiter = require('../../../config/requestsRateLimiter/rateLimiter.js');
const checkAuthenticated = require('../../../config/checkAuthenticated.js');

// UserQuotes model
const UserQuotes = require('../../../models/UserQuotes.js');

deleteSavedQuoteRouter.delete('/', 
  rateLimiter.max2500RequestsPerday.prevent,
  rateLimiter.multipleClickingLimiter.prevent,
  checkAuthenticated,
  (req, res) => {
    // check a quote had been selected to delete
    if (!req.body.id) {
      console.log('Bad request'),
      res.status(400).json({message: 'Please specify a quote to delete'});
    } else {
      UserQuotes.findOne({userId: req.user.id})
        .then(userQ => {
          // search index of quote to be modified and update it
          const index = userQ.quotesArray.map(quote => {
            return quote.id;
          }).indexOf(req.body.id);
          userQ.quotesArray.splice(index, 1);
          userQ.save();
          console.log('Quote has been deleted');
          res.status(201).json({message: 'Quote has been deleted'});
        })
        .catch(err => {
          console.log(err);
          res.status(500).json({message: 'There was an error deleting the quote'});
        });
    };
  }
);

module.exports = deleteSavedQuoteRouter;