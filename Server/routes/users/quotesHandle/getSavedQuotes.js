const express = require('express');
const getSavedQuotesRouter = express.Router();
const rateLimiter = require('../../../config/requestsRateLimiter/rateLimiter.js');
const checkAuthenticated = require('../../../config/checkAuthenticated.js');

// UserQuotes model
const UserQuotes = require('../../../models/UserQuotes.js');

getSavedQuotesRouter.get('/',
  rateLimiter.max2500RequestsPerday.prevent,
  // different multiple clicking limiter, bacause save can make two consecutive requests if it needs to update savedQuotesArray.
  rateLimiter.extraMultipleClickingLimiter.prevent,
  checkAuthenticated,
  (req, res) => {
    if (req.user.userQuotesId === 'Create userQuotes at first save') {
      console.log(`${req.user.name} did not save any quote yet`);
      res.json({message:`${req.user.name} did not save any quote yet`, quotesArray: ['Create userQuotes at first save']});
    } else {
      UserQuotes.findById(req.user.userQuotesId)
        .then(userQ => {
          console.log(`${req.user.name} quotes retrieved successfully`);
          res.json({message:'Quotes retrieved successfully', quotesArray: userQ.quotesArray, success: true});
        })
        .catch(err => {
          console.log(err);
          res.status(500).json({message: 'There was an error retrieving your saved quotes'});
        });
    };
  }
);

module.exports = getSavedQuotesRouter;