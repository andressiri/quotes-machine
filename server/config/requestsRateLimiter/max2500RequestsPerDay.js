const ExpressBrute = require('express-brute');
const moment = require('moment');
const handleStoreError = require('./handleStoreErrorCallback');
require('dotenv').config();

const reachedMaxOf2500Callback = (req, res, next, nextValidRequestDate) => {
  req.flash('message', `You've exceded the maximum of 2500 tries per day, please try again ${moment(nextValidRequestDate).fromNow()}`);
  res.status(429).json({message: `You've exceded the maximum of 2500 tries per day, please try again ${moment(nextValidRequestDate).fromNow()}`});  
};

  // No more than 2500 attempts per day per IP
module.exports = store => {
  return new ExpressBrute(store, {
    freeRetries: 2500,
    minWait: 25*60*60*1000, // 1 day 1 hour (should never reach this wait time)
    maxWait: 25*60*60*1000, // 1 day 1 hour (should never reach this wait time)
    lifetime: 24*60*60, // 1 day (seconds not milliseconds)
    failCallback: reachedMaxOf2500Callback,
    handleStoreError: handleStoreError
  });
};