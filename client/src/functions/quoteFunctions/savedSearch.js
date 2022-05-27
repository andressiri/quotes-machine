const savedSearch = (searchFor, searchIn) => {
  // check at least two alphanumeric characters had been sent
  if (!(/(?:[^\w]*[\w]){2}/ig.test(searchFor))) {
    const arrayToReturn = ['Please use at least two alphanumeric characters'];
    return arrayToReturn;
  };
  // get regexp to search ignoring punctuaction
  let previousWasBlankSpace = false  
  const searchForIgnoringPunctuation = searchFor.trim().replace(/[^\w]/g, (char) => {
    if (/\s/.test(char)) {
      if (previousWasBlankSpace) return '';
      previousWasBlankSpace = true;
      return '[^\\w]*[\\s]+'
    };
    previousWasBlankSpace = false;
    if (/[\.\+\*\?\^\$\(\)\[\]\{\}\|\\]/.test(char)) return `\\${char}`;
    return char;
  });
  const reg = new RegExp(searchForIgnoringPunctuation, 'i');
  // filter array sent with matches
  let arrayToReturn = searchIn.filter(quoteObj => {
    if (reg.test(quoteObj.content) || reg.test(quoteObj.author)) return quoteObj;
    return null;
  });
  if (!arrayToReturn[0]) arrayToReturn = [`No matches found for ${searchFor}`];
  return arrayToReturn
};

export default savedSearch;