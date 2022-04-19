const ExpressBrute = require('express-brute');
const moment = require('moment');
const handleStoreError = require('./handleStoreErrorCallback');
require('dotenv').config();

const tooManyMailsSentCallback = (req, res, next, nextValidRequestDate) => {
  req.flash('message', `You've sent too many mails, please try again ${moment(nextValidRequestDate).fromNow()}`);
  res.status(429).json({message: `You've sent too many mails, please try again ${moment(nextValidRequestDate).fromNow()}`});  
};
  
// Prevent too many attempts for the same username from the same ip
module.exports = store => {
  return new ExpressBrute(store, {
    freeRetries: 9,
    minWait: 5*60*1000, // 5 minutes
    maxWait: 60*60*1000, // 1 hour,
    failCallback: tooManyMailsSentCallback,
    handleStoreError: handleStoreError
  });
};