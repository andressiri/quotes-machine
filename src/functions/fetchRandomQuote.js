async function fetchRandomQuote() {
  const response = await fetch('https://api.quotable.io/random');
  let json = await response.json();
  if (json.content.length > 170) {
    json = await fetchRandomQuote();
  };   
  return json;
}

export default fetchRandomQuote;
