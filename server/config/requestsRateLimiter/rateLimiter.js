const ExpressBrute = require('express-brute');
require('dotenv').config();
// Set mongoose Store for production
const mongoose = require("mongoose");
const MongooseStore = require("express-brute-mongoose");
const BruteForceSchema = require("express-brute-mongoose/dist/schema");
const storeModel = mongoose.model(
  "bruteforce",
  new mongoose.Schema(BruteForceSchema)
);

// Rate limiter store
let store;
if (process.env.ENVIRONMENT === 'development'){
  store = new ExpressBrute.MemoryStore(); // stores state locally, don't use this in production
} else {
  // instead store state with mongoose store in production
  store = new MongooseStore(storeModel);
};

// Rate limiter to avoid multiple clicking
exports.multipleClickingLimiter = require('./multipleClickingLimiter.js')(store);
exports.extraMultipleClickingLimiter = require('./extraMultipleClickingLimiter.js')(store);

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

// No more than 2500 attempts per day per IP
exports.max2500RequestsPerday = require('./max2500RequestsPerDay.js')(store);
