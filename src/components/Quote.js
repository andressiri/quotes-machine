import React, {useState, useContext} from 'react';
import {Context} from '../Context.js';
import RenderAsImage, { ImageAsHtml } from 'react-render-as-image'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import './../styles/icon.scss';
import './../styles/RandomColor.scss';
import './../styles/QuoteBox.scss';

function Quote() {
    const {colorNum, quote, auth} = useContext(Context);
    const [colorNumber, setColorNumber] = colorNum;
    const [quoteText, setQuoteText] = quote;  
    const [author, setAuthor] = auth;

  return (
    <div>
      <h1 id="text" className={`quote text-color${colorNumber}`}>
        <FontAwesomeIcon icon={faQuoteLeft} class={`icon text-color${colorNumber}`} />
        {quoteText}
        <FontAwesomeIcon icon={faQuoteRight} class={`icon text-color${colorNumber}`} /> 
      </h1>
      <p id="author" className={`text-color${colorNumber}`}>{`- ${author}`}</p>
    </div>
  )
}

export default Quote;
;