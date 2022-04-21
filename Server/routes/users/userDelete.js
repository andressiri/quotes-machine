const express = require('express');
const userDeleteRouter = express.Router();
const rateLimiter = require('../../config/requestsRateLimiter/rateLimiter.js');
const checkAuthenticated = require('../../config/checkAuthenticated.js');
// User and UserQuotes models
const User = require('../../models/User.js');
const UserQuotes = require('../../models/UserQuotes.js');

// Handle user delete account - @/api/users/user/delete
userDeleteRouter.delete('/', 
  rateLimiter.max500RequestsPerday.prevent,
  rateLimiter.multipleClickingLimiter.prevent,
  checkAuthenticated,
  (req, res) => {
    User.findOne({_id: req.user.id})
      .then(user => {
        if (user.userQuotesId !== 'Create userQuotes at first save') {
          UserQuotes.deleteOne({_id: user.userQuotesId})
            .then((q) => console.log(q))
            .catch(err => console.log(err));
        };
        user.delete();
        console.log('Account has been deleted');
        res.json({message: 'Account has been deleted'});
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({message: 'There was an error deleting your account'});
      });
  }
);

module.exports = userDeleteRouter;