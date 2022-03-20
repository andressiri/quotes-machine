const ExpressBrute = require('express-brute');
const moment = require('moment');
const handleStoreError = require('./handleStoreErrorCallback');
require('dotenv').config();

const tooManyRequestsForUserCallback = (req, res, next, nextValidRequestDate) => {
  req.flash('message', `You've made too many failed attempts for ${req.body.email} in a short period of time, please try again ${moment(nextValidRequestDate).fromNow()}`);
  res.status(429).json({message: `You've made too many failed attempts for ${req.body.email} in a short period of time, please try again ${moment(nextValidRequestDate).fromNow()}`});  
};
  
// Prevent too many attempts for the same username from the same ip
module.exports = store => {
  return new ExpressBrute(store, {
    freeRetries: 4,
    minWait: 3*60*1000, // 3 minutes
    maxWait: 60*60*1000, // 1 hour,
    failCallback: tooManyRequestsForUserCallback,
    handleStoreError: handleStoreError
  });
};