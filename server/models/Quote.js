const mongoose = require('mongoose');

const quoteSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
    unique: true
  },
  author: {
    type: String,
    required: true
  }
}, {collection: 'quotes'});

const Quote = mongoose.model('Quote', quoteSchema);

module.exports = Quote;