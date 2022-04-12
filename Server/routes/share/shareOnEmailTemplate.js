// Mail template for shareOnEmail
module.exports = (req) => {
  let quoteToShare = `
    <h2>"${req.body.content}"</h2>
    <h3>- ${req.body.author}</h3>
  `;

  if (req.body.image) {
    quoteToShare = `
      <img src="${req.body.image}" />
      <p>"${req.body.content}" - ${req.body.author}</p>
    `;
  };
  
  const mailTemplate = `
    <h1>Welcome to Quotes Machine</h1>
    <p>Hello there! I found this quote at <a href="http://quotesmachine.com" target="_blank" rel="noopenener noreferrer nofollow">Quotes Machine</a> and I wanted to share it with you!</p>
    ${quoteToShare}
    <p>Hope you like it!</p>
    <h3>${req.user.name}</h3>
  `;
  
  return(mailTemplate);
};