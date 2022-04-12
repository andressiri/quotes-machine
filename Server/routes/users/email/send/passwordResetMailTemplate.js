// Mail template for sendPasswordResetCode
module.exports = (userName, code) => {
  return(`
    <h1>Welcome to Quotes Machine</h1>
    <p>Hello ${userName}! In order to change your password you should use the following code:</p>
    <h2>Code: ${code}</h2>
    <p>Thanks for coming back, we hope you enjoy it!</p>`
  );
};