const express = require('express');
const userQuoteDeleteRouter = express.Router();
const rateLimiter = require('../../../config/requestsRateLimiter/rateLimiter.js');
const checkAuthenticated = require('../../../config/checkAuthenticated.js');
// UserQuotes model
const UserQuotes = require('../../../models/UserQuotes.js');

// Handle user saved quote delete - @/api/users/quote/delete
userQuoteDeleteRouter.delete('/:id', 
  rateLimiter.max2500RequestsPerday.prevent,
  rateLimiter.multipleClickingLimiter.prevent,
  checkAuthenticated,
  (req, res) => {
    UserQuotes.findOne({userId: req.user.id})
      .then(userQ => {
        // search index of quote to be modified and update it
        const index = userQ.quotesArray.map(quote => {
          return quote.id;
        }).indexOf(req.body.id);
        if (index === -1) {
          console.log('Bad request'),
          res.status(400).json({message: 'Please send an existing quote id'});
        } else {
          userQ.quotesArray.splice(index, 1);
          userQ.save();
          console.log('Quote has been deleted');
          res.json({message: 'Quote has been deleted'});
        };
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({message: 'There was an error deleting the quote'});
      });
  }
);

module.exports = userQuoteDeleteRouter;