async function fetchRandomQuote() {
  const response = await fetch('https://api.quotable.io/random');
  const json = await response.json();    
  return json;
}

export default fetchRandomQuote;
