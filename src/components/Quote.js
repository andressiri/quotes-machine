import React, {useContext} from 'react';
import {Context} from '../Context.js';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faQuoteLeft} from "@fortawesome/free-solid-svg-icons";
import {faQuoteRight} from "@fortawesome/free-solid-svg-icons";
import './../styles/icon.scss';
import './../styles/Quote.scss';

function Quote() {
  const {colors, quote, auto, groups, refs} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const [quoteText, setQuoteText] = quote.quoteTxt;  
  const [author, setAuthor] = quote.auth;
  const [fadeQuote, setFadeQuote] = quote.fadQ; 
  const quoteRef = refs.refImg;

  return (    
    <div id='refDiv' className={`quote BG-color${imgBGColor} text-color${colorNumber} fade${fadeQuote}`} ref={quoteRef}>
      <h1 id="text" className={`text fade${fadeQuote}`} >
        <FontAwesomeIcon icon={faQuoteLeft} className={`quoteIcon fade${fadeQuote}`} />
        {` ${quoteText} `}
        <FontAwesomeIcon icon={faQuoteRight} className={`quoteIcon fade${fadeQuote}`} /> 
      </h1>
      <p id="author" className={`fade${fadeQuote}`} >{`- ${author}`}</p>       
    </div >
  );
};

export default Quote;