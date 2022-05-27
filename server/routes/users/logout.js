const express = require('express');
const logoutRouter = express.Router();
const rateLimiter = require('../../config/requestsRateLimiter/rateLimiter.js');

// Logout and session reset handle - @/api/users/logout
logoutRouter.delete('/',
  rateLimiter.max500RequestsPerday.prevent,
  (req, res) => {
    let msg = 'Session destroyed';
    if (req.user) {
      req.logOut();
      msg = 'User logged out';
    };
    req.session.destroy();
    console.log(msg);
    res.json({message: msg});
  }
);

module.exports = logoutRouter;