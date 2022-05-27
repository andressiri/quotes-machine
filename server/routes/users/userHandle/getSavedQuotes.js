const express = require('express');
const getSavedQuotesRouter = express.Router();
const rateLimiter = require('../../../config/requestsRateLimiter/rateLimiter.js');
const checkAuthenticated = require('../../../config/checkAuthenticated.js');
// UserQuotes model
const UserQuotes = require('../../../models/UserQuotes.js');

// Handle quotes saved request - @/api/users/saved-quotes
getSavedQuotesRouter.get('/',
  rateLimiter.max2500RequestsPerday.prevent,
  // different multiple clicking limiter, bacause save can make two consecutive requests if it needs to update savedQuotesArray.
  rateLimiter.extraMultipleClickingLimiter.prevent,
  checkAuthenticated,
  (req, res) => {
    if (req.user.userQuotesId === 'Create userQuotes at first save') {
      console.log(`${req.user.name} did not save any quote yet`);
      res.json({message:'You didn\'t save any quote yet', quotesArray: ['You didn\'t save any quote yet']});
    } else {
      UserQuotes.findById(req.user.userQuotesId)
        .then(userQ => {
          console.log(`${req.user.name}\'s quotes retrieved successfully`);
          res.json({message:'Quotes retrieved successfully', quotesArray: userQ.quotesArray});
        })
        .catch(err => {
          console.log(err);
          res.status(500).json({message: 'There was an error retrieving your saved quotes, please try again'});
        });
    };
  }
);

module.exports = getSavedQuotesRouter;