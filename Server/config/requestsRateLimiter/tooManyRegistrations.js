const ExpressBrute = require('express-brute');
const moment = require('moment');
const handleStoreError = require('./handleStoreErrorCallback');
require('dotenv').config();

const tooManyRegistrationsCallback = (req, res, next, nextValidRequestDate) => {
  req.flash('message', `You've registered too many accounts, please try again ${moment(nextValidRequestDate).fromNow()}`);
  res.status(429).json({message: `You've registered too many accounts, please try again ${moment(nextValidRequestDate).fromNow()}`});  
};
  
// Prevent too many attempts for the same username from the same ip
module.exports = store => {
  return new ExpressBrute(store, {
    freeRetries: 10,
    minWait: 2*60*1000, // 2 minutes
    maxWait: 60*60*1000, // 1 hour,
    failCallback: tooManyRegistrationsCallback,
    handleStoreError: handleStoreError
  });
};