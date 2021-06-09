import React, {useContext} from 'react';
import {Context} from '../Context.js';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faQuoteLeft} from "@fortawesome/free-solid-svg-icons";
import {faQuoteRight} from "@fortawesome/free-solid-svg-icons";
import './../styles/icon.scss';
import './../styles/RandomColor.scss';
import './../styles/Quote.scss';

function Quote() {
  const {colorNum, quote, auth, auto, aClass, aTime, fad, ref} = useContext(Context);
  const [colorNumber, setColorNumber] = colorNum;
  const [quoteText, setQuoteText] = quote;  
  const [author, setAuthor] = auth;
  const [fade, setFade] = fad; 
  const quoteRef = ref;

  return (    
    <div id='refDiv' className={`quote text-color${colorNumber} fade${fade}`} ref={quoteRef}>
      <h1 id="text" >
        <FontAwesomeIcon icon={faQuoteLeft} class={'quoteIcon'} />
        {quoteText}
        <FontAwesomeIcon icon={faQuoteRight} class={'quoteIcon'} /> 
      </h1>
      <p id="author">{`- ${author}`}</p>       
    </div >
  )
}

export default Quote;
;