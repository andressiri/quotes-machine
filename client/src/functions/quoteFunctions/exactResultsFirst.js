// organize Array: first full words that match with search, next words that partially match with search, parts of words that match with search
const exactResultsFirst = (resultsArray, searchedFor) => {
  const exactResultsPartialWord = [];
  const partialRegex = new RegExp(`(^|[\\s]+)${searchedFor}`, 'i');
  const exactResultsFullWord = [];
  const fullWordRegex = new RegExp(`(^|[\\s]+)${searchedFor}[^\\w]+`, 'i');
  const notExactResults = resultsArray.filter((quote) => {
    if (partialRegex.test(quote.content) || partialRegex.test(quote.author)) {
      if (fullWordRegex.test(quote.content) || fullWordRegex.test(quote.author)) {
        exactResultsFullWord.push(quote);
        return;
      };
      exactResultsPartialWord.push(quote);
      return;
    };
    return quote;
  });
  const organizedArray = exactResultsFullWord.concat(exactResultsPartialWord, notExactResults);
  return organizedArray;
};

export default exactResultsFirst;