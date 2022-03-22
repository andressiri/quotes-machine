const mongoose = require("mongoose");

const userQuotesSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true
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
      }
    }
  ]
}, {collection: 'usersQuotes'});

const UserQuotes = mongoose.model("UserQuotes", userQuotesSchema);

module.exports = UserQuotes;