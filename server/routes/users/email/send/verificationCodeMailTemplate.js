// Mail template for sendVerificationCode
module.exports = (userName, code) => {
  return(`
    <h1>Welcome to Quotes Machine</h1>
    <p>Hello ${userName}! In order to verify your identity you should use the following code:</p>
    <h2>Code: ${code}</h2>
    <p>Sorry for the trouble, we hope you enjoy the app!</p>`
  );
};