const express = require("express");
const router = express.Router();

// Register Handle
router.use('/register', require('./userHandle/register.js'));

// Login Handle
  //Authentication
router.use('/loginAuth', require('./login/loginAuth.js'));
  //Authorization
router.use('/login', require('./login/login.js'));

// Logout and session reset handle
router.use('/logout', require('./login/logout.js'));

// Email verification and change password handle
  //Send email for verification
router.use('/sendVerifyEmail', require('./emailVerification/sendVerifyEmail.js'));
  //Check code
router.use('/verifyEmail', require('./emailVerification/verifyEmail.js'));

// Change Password handle
  //Send email for password recovery
router.use('/sendChangePassword', require('./userHandle/sendChangePassword.js'));
  //Change password
router.use('/changePassword', require('./userHandle/changePassword.js'));

// Save user options
router.use('/saveUserOptions', require('./userHandle/saveUserOptions.js'));

//Save quotes handle
  //Save new quote
router.use('/saveQuote', require('./quotesHandle/saveQuote.js'));
  //Get saved quotes
router.use('/getSavedQuotes', require('./quotesHandle/getSavedQuotes.js'));
  //Save quote changes
router.use('/saveModifiedQuote', require('./quotesHandle/saveModifiedQuote.js'));
  //Delete Quote
router.use('/deleteSavedQuote', require('./quotesHandle/deleteSavedQuote.js'));

module.exports = router;