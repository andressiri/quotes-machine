const fetchRandomQuote = async () => {
  const response = await fetch('/api/quotes/random-quote');
  let json = await response.json();
  if (json.content.length > 170) {
    json = await fetchRandomQuote();
  };
  return json;
};

export default fetchRandomQuote;