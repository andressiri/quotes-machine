const express = require('express');
const quotesRouter = express.Router();

// Get Random quote
quotesRouter.use('/random-quote', require('./randomQuote'));

// Get Search results
quotesRouter.use('/search', require('./getSearchResults.js'));

module.exports = quotesRouter;