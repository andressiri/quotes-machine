const express = require('express');
const randomQuoteRouter = express.Router();
// Quote model
const Quote = require('../../models/Quote.js');

randomQuoteRouter.get('/',
  (req, res) => {
    Quote.countDocuments().exec()
      .then(count => {
        Quote.findOne().skip(Math.floor(Math.random() * count)).exec()
          .then(doc => {
            console.log('Random quote sent')
            res.json(doc);
          })
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
   }
);
module.exports = randomQuoteRouter;