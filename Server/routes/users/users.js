const express = require('express');
const router = express.Router();

// Register Handle
router.use('/register', require('./register.js'));

// Login Handle
  //Authentication
router.use('/login/authentication', require('./login/loginAuthentication.js'));
  //Authorization
router.use('/login/response', require('./login/loginResponse.js'));

// Logout and session reset handle
router.use('/logout', require('./logout.js'));

// Email verification and change password handle
  //Send email for verification
router.use('/email/send/verification-code', require('./email/send/sendVerificationCode.js'));
  //Check code
router.use('/email/verification', require('./email/emailVerification.js'));

// Change Password handle
  //Send email for password recovery
router.use('/email/send/password-reset-code', require('./email/send/sendPasswordResetCode.js'));
  //Change password
router.use('/password/edit', require('./userHandle/passwordEdit.js'));

//  Change Name handle
router.use('/name/edit', require('./userHandle/nameEdit.js'));

// Save user options
router.use('/options/save', require('./userHandle/optionsSave.js'));

// Delete user account
router.use('/user/delete', require('./userDelete.js'));

//Save quotes handle
  //Save new quote
router.use('/quote/save', require('./quote/userQuoteSave.js'));
  //Get saved quotes
router.use('/saved-quotes', require('./userHandle/getSavedQuotes.js'));
  //Save quote changes
router.use('/quote/edit', require('./quote/userQuoteEdit.js'));
  //Delete Quote
router.use('/quote/delete', require('./quote/userQuoteDelete.js'));

module.exports = router;