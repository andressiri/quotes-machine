const ExpressBrute = require('express-brute');
let MemcachedStore = require('express-brute-memcached');
require('dotenv').config();
let store;

// Rate limiter store
if (process.env.ENVIRONMENT == 'development'){
  store = new ExpressBrute.MemoryStore(); // stores state locally, don't use this in production
} else {
  // instead store state with memcached in production
  store = new MemcachedStore(['127.0.0.1:11211'], {
      prefix: 'NoConflicts'
  });
};

// Rate limiter to avoid multiple clicking
exports.multipleClickingLimiter = require('./multipleClickingLimiter.js')(store);

// Prevent too many attempts for the same username from the same ip
exports.tooManyRequestsForUser = require('./tooManyRequestsForUser.js')(store);

// Prevent too many registrations
exports.tooManyRegistrations = require('./tooManyRegistrations.js')(store);

// Prevent too many mails sent
exports.tooManyMailsSent = require('./tooManyMailsSent.js')(store);

// Prevent too many attempts
exports.tooManyAttempts = require('./tooManyAttempts.js')(store);

// No more than 500 attempts per day per IP
exports.max500RequestsPerday = require('./max500RequestsPerDay.js')(store);
