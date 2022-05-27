// can request: check at least ${time} has passed from last request that reached this point
module.exports = (req, res, sessionTimestamp, time) => {
  let timePassedBetweenRequests = 0;
  let canDoAnotherRequest = true;
  if (!req.session[sessionTimestamp]) {
    req.session[sessionTimestamp] = Date.now();
    timePassedBetweenRequests = time;
  } else {
    const auxDate = Date.now();
    timePassedBetweenRequests = auxDate - req.session[sessionTimestamp];
  };
  if (timePassedBetweenRequests < time) {
    canDoAnotherRequest = false
    console.log('Spam control');
    console.log(`You will have to wait ${Math.floor((time - timePassedBetweenRequests)/1000)} seconds to do another request`);
    res.status(429).json({message: `You will have to wait ${Math.floor((time - timePassedBetweenRequests)/1000)} seconds to do another request`});
  } else {
    req.session[sessionTimestamp] = Date.now();
  };
  return canDoAnotherRequest;
};