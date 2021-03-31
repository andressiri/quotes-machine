import React, {useState, useContext, useEffect} from 'react';
import './QuoteBox.css';
import {ColorContext} from './../ColorContext.js';
import './../RandomColor.css';

function QuoteBox() {
  const [colorNumber, setColorNumber] = useContext(ColorContext);
  const [quoteText, setQuoteText] = useState('');
  const [author, setAuthor] = useState('');
  
  function randomNumber() {
    setColorNumber((prev) => prev = Math.floor(Math.random() * (3 + 1)));
  }

  function randomQuote() {
    fetch('https://api.quotable.io/random')
    .then(response => response.json())
    .then(data => {
      setQuoteText(data.content);
      setAuthor(data.author);   
    })
    .catch(err => console.log(err))
  }

  useEffect(() => randomQuote(), []);
  
  return (
    <div id="quote-box" className={`QuoteBox`}>
        <h1 id="text">{quoteText}</h1>
        <p id="author">{author}</p>
        <button className={`color${colorNumber}`}><a id="tweet-quote" href="youtube.com">Tweet</a></button>
        <button id="new-quote" onClick={function(event){ randomNumber(); randomQuote()}} className={`color${colorNumber}`}>New quote</button>        
    </div>
  );
}

export default QuoteBox;