import React, {useState, useContext, useEffect} from 'react';
import {Context} from '../Context.js';
import RenderAsImage, { ImageAsHtml } from 'react-render-as-image'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import './../styles/icon.scss';
import './../styles/RandomColor.scss';
import './../styles/Quote.scss';

function Quote() {
  const {colorNum, quote, auth, auto, aClass, aTime, fad} = useContext(Context);
  const [colorNumber, setColorNumber] = colorNum;
  const [quoteText, setQuoteText] = quote;  
  const [author, setAuthor] = auth;
  const [fade, setFade] = fad;
  
  

  return (
    <div>
      <h1 id="text" className={`quote text-color${colorNumber} fade${fade}`}>
        <FontAwesomeIcon icon={faQuoteLeft} class={`icon text-color${colorNumber} fade${fade}`} />
        {quoteText}
        <FontAwesomeIcon icon={faQuoteRight} class={`icon text-color${colorNumber} fade${fade}`} /> 
      </h1>
      <p id="author" className={`text-color${colorNumber} fade${fade}`}>{`- ${author}`}</p>
    </div>
  )
}

export default Quote;
;