const express = require('express');
const getSearchResultsRouter = express.Router();

getSearchResultsRouter.get('/:searchFor/:byQuote/:byAuthor',
  (req, res) => {
    console.log(req.params);
    res.json({message: 'No results for that search', searchResults: ['No results for that search'], success: true});
  }
);

module.exports = getSearchResultsRouter;