const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.send('Please specify a route...'));

module.exports = router;