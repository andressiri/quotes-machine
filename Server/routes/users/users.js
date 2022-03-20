const express = require("express");
const router = express.Router();

// Register Handle
router.use('/register', require('./register.js'));

// Login Handle
  //  Authentication
router.use('/loginAuth', require('./loginAuth.js'));
  //  Authorization
router.use('/login', require('./login.js'));

// Logout and session reset handle
router.use('/logout', require('./logout.js'));

// Email verification and change password handle
  //  Send email for verification
router.use('/sendVerifyEmail', require('./sendVerifyEmail.js'));
  //  check code
router.use('/verifyEmail', require('./verifyEmail.js'));

// Change Password handle
  // Send email for password recovery
router.use('/sendChangePassword', require('./sendChangePassword.js'));
  // Change password
router.use('/changePassword', require('./changePassword.js'));  

module.exports = router;