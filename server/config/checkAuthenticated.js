//  check auhenticated
module.exports = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  } else {
    console.log('Not logged in');
    res.status(401).json({message: 'You should be logged in order to do this'});
  };
}