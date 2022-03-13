function setBackground (num) {
  if (num % 2 === 0 || num === 0) {
    return 8;
  } else {
    return 7;
  };
};

export default setBackground;