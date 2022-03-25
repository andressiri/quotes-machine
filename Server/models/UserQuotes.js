const mongoose = require("mongoose");

const userQuotesSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
    unique: true
  },
  quotesArray: [
    {
      content: {
        type: String,
        required: true
      },
      author: {
        type: String,
        required: true
      },
      colorNum: {
        type: Number,
        required: true
      },
      imgBG: {
        type: Number,
        required: true
      },
      fontF: {
        type: String,
        required: true
      },
      boldF: {
        type: String,
        required: true
      },
      italicF: {
        type: String,
        required: true
      },
      upperF: {
        type: String,
        required: true
      },
      fontS: {
        type: Number,
        required: true
      } 
    }
  ]
}, {collection: 'usersQuotes'});

const UserQuotes = mongoose.model("UserQuotes", userQuotesSchema);

module.exports = UserQuotes;