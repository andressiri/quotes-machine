const express = require("express");
const mongoose = require("mongoose");
const session = require('express-session');
const passport = require('passport');

const app = express();

// Passport config
require('./config/passport')(passport);

// DB Config
const db = require("./config/keys").MongoURI;

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
  resave: false,
  saveUninitialized: true
}));

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use("/", require("./routes/app"));
app.use("/quotes", require("./routes/quotes"));
app.use("/users", require("./routes/users"));

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));