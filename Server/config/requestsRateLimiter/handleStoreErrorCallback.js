const handleStoreError = err => {
  log.error(err); // log this error so we can figure out what went wrong cause node to exit, hopefully restarting the process fixes the problem
  console.log(err);
  throw {
      message: err.message,
      parent: err.parent
  };
};

module.exports = handleStoreError;