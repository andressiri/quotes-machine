const express = require('express');
const getSearchResultsRouter = express.Router();
const rateLimiter = require('../../config/requestsRateLimiter/rateLimiter.js');

// Quote model
const Quote = require('../../models/Quote.js');

getSearchResultsRouter.get('/:searchFor/:byQuote/:byAuthor',
  rateLimiter.max2500RequestsPerday.prevent,
  rateLimiter.multipleClickingLimiter.prevent,
  (req, res) => {
    if (!(/(?:[^\w]*[\w]){2}/ig.test(req.params.searchFor))) {
      console.log('Bad Request');
      res.status(400).json({message: 'Please use at least two alphanumeric characters'});
    } else {
      const { searchFor, byQuote, byAuthor } = req.params;
      let previousWasBlankSpace = false
      const searchForIgnoringPunctuation = searchFor.trim().replace(/[^\w]/g, (char) => {
        if (/\s/.test(char)) {
          if (previousWasBlankSpace) return '';
          previousWasBlankSpace = true;
          return '[^\\w]*[\\s]+'
        };
        previousWasBlankSpace = false;
        if (/[\.\+\*\?\^\$\(\)\[\]\{\}\|\\]/.test(char)) return `\\${char}`;
        return char;
      });
      const reg = new RegExp(searchForIgnoringPunctuation, 'i');
      let search = {$or: [{content: reg}, {author: reg}]};
      if (byQuote === 'false') search = {author: reg};
      if (byAuthor === 'false') search = {content: reg};
      Quote.find(search).exec()
        .then((searchArray) => {
          if (searchArray[0]) {
            res.json({message: `This are the matches for ${searchFor}`, searchResults: searchArray, foundMatches: true});
          } else {
            res.json({message: `No matches for ${searchFor}`});
          };
        })
        .catch(err => {
          console.log(err);
          res.status(500).json({message: 'There was an error with the search'});
        });
    }; 
  }
);

module.exports = getSearchResultsRouter;