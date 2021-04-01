import React, {useState, useContext, useEffect} from 'react';
import './QuoteBox.css';
import {ColorContext} from './../ColorContext.js';
import './../RandomColor.scss';
import randomDifNum from './randomDifNum.js';

function QuoteBox() {
  const [colorNumber, setColorNumber] = useContext(ColorContext);
  const [quoteText, setQuoteText] = useState('');
  const [author, setAuthor] = useState('');
    
  function randomColor() {
    setColorNumber((prev) => prev = randomDifNum(colorNumber));     
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
        <h1 id="text" className={`text-color${colorNumber}`}>{quoteText}</h1>
        <p id="author" className={`text-color${colorNumber}`}>{author}</p>
        <button className={`BG-color${colorNumber}`}><a id="tweet-quote" href="youtube.com">Tweet</a></button>
        <button id="new-quote" onClick={function(){ randomColor(); randomQuote()}} className={`BG-color${colorNumber}`}>New quote</button>        
    </div>
  );
}

export default QuoteBox;