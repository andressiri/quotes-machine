const ExpressBrute = require('express-brute');
const handleStoreError = require('./handleStoreErrorCallback');
require('dotenv').config();

const multipleClickingCallback = (req, res) => {
  req.flash('message', 'Too many requests');
  res.status(429).json({message: 'Too many requests: request dismissed'});
};

// Rate limiter to avoid multiple clicking
module.exports = store => {
  return new ExpressBrute(store, {
    freeRetries: 0,
    minWait: 1000,
    maxWait: 1000,
    failCallback: multipleClickingCallback,
    handleStoreError: handleStoreError
  });
};

