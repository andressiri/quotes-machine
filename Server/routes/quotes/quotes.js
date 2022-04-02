const express = require('express');
const router = express.Router();
const quotes = require('../../Quotes.js');

router.get('/randomQuote', (req, res) => {
    const randomQuote = quotes[Math.floor(Math.random() * 10)];
    res.json(randomQuote);
});

router.get('/:id', (req, res) => {
    const found = quotes.some(quote => quote.id === req.params.id);
    if (found) {
        const auxArr = quotes.filter(quote => quote.id === req.params.id);
        res.json(auxArr[0]);
    } else {
        res.status(404).json({msg: `No quote with the id of ${req.params.id}` })
    };
});

module.exports = router;