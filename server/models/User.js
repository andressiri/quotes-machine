const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
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
  },
  userOptions:
    {
      restartAfterShare: {
        type: Boolean,
        required: true
      },
      automaticColor: {
        type: Boolean,
        required: true
      },
      quoteConfig:
        {
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
    }
}, {collection: 'users'});

const User = mongoose.model('User', userSchema);

module.exports = User;