const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  verifiedEmail: {
    type: Boolean,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  userQuotesId: {
    type: String,
    required: true
  }
}, {collection: 'users'});

const User = mongoose.model("User", userSchema);

module.exports = User;
