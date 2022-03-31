async function fetchRandomQuote() {
  const response = await fetch('/quotes/randomQuote');
  let json = await response.json();
  if (json.content.length > 170) {
    json = await fetchRandomQuote();
  };   
  return json;
}

export default fetchRandomQuote;
