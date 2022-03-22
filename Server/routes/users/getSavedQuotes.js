const express = require('express');
const getSavedQuotesRouter = express.Router();
const rateLimiter = require('../../config/requestsRateLimiter/rateLimiter.js');

// UserQuotes model
const UserQuotes = require('../../models/UserQuotes.js');

getSavedQuotesRouter.get('/', 
  rateLimiter.max500RequestsPerday.prevent,
  rateLimiter.multipleClickingLimiter.prevent,
  (req, res) => {
    if (!req.user) {
      console.log('Not logged in');
      res.status(428).json({message: 'You should be logged in order to do this'});
    } else if (req.user.userQuotesId === 'Create userQuotes at first save') {
      console.log(`${req.user.name} did not save any quote yet`);
      res.json({message:`${req.user.name} did not save any quote yet`, quotesArray: ['Create userQuotes at first save']}); 
    } else {       
      UserQuotes.findById(req.user.userQuotesId)
        .then(userQ => {
          console.log(`${req.user.name} quotes retrieved successfully`);
          res.json({message:`${req.user.name} quotes retrieved successfully`, quotesArray: userQ.quotesArray});        
        })
        .catch(err => console.log(err));
    }; 
  }
);

module.exports = getSavedQuotesRouter;