const express = require('express');
const getSearchResultsRouter = express.Router();
const rateLimiter = require('../../config/requestsRateLimiter/rateLimiter.js');
// Quote model
const Quote = require('../../models/Quote.js');

getSearchResultsRouter.get('/:searchFor',
  rateLimiter.max2500RequestsPerday.prevent,
  rateLimiter.multipleClickingLimiter.prevent,
  (req, res) => {
    if (!(/(?:[^\w]*[\w]){2}/ig.test(req.params.searchFor))) {
      console.log('Bad Request');
      res.status(400).json({message: 'Please use at least two alphanumeric characters'});
    } else {
      const { searchFor } = req.params;
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
      Quote.find({$or: [{content: reg}, {author: reg}]}).exec()
        .then((matchesArray) => {
          if (matchesArray[0]) {
            const searchResults = matchesArray.map(quoteObj => {
              const returnObj = {
                _id: quoteObj._id,
                content: quoteObj.content,
                author: quoteObj.author,
              };
              if (reg.test(quoteObj.content)) returnObj['byQuote'] = true;
              if (reg.test(quoteObj.author)) returnObj['byAuthor'] = true;
              return returnObj;
            });
            res.json({message: `This are the matches for ${searchFor}`, searchResults: searchResults, foundMatches: true});
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