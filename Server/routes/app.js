const express = require('express');
const router = express.Router();

router.get('/', 
  (req, res) => {
    if (process.env.ENVIRONMENT !== 'development') {
      res.redirect('/box/app');
    } else {
      res.send('Please specify a route...');
    } ;
  }
);

module.exports = router;