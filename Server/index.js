const express = require("express");
const session = require('express-session');
const mongoose = require("mongoose");
const passport = require('passport');
const flash = require('connect-flash');
require('dotenv').config();

const app = express();

// Passport config
require('./config/passport')(passport);

// DB Config
const db = process.env.MONGO_URI;

// Connect to Mongo
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

// Bodyparser
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: "false" }));

// Express Session
app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true
}));

// Connect flash
app.use(flash());

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/', require('./routes/app.js'));
app.use('/quotes', require('./routes/quotes.js'));
app.use('/users', require('./routes/users/users.js'));

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => (`Server started at port ${PORT}`));
