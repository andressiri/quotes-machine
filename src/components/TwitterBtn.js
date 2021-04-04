import React, {useState, useContext} from "react";
import { Context } from "./../Context.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitterSquare } from "@fortawesome/free-brands-svg-icons";
import './../styles/icon.css';
import './../styles/RandomColor.scss';

function TwitterBtn() {
  const {colorNum, quote, auth} = useContext(Context);
  const [colorNumber, setColorNumber] = colorNum;
  const [quoteText, setQuoteText] = quote;  
  const [author, setAuthor] = auth;

  return (
    <a id="tweet-quote" target="_blank" href={`http://twitter.com/intent/tweet?hashtags=quotes&realted=elsirook&text="${quoteText}"%20-%20${author}`}>
      <FontAwesomeIcon icon={faTwitterSquare} class={`icon text-color${colorNumber}`} />
    </a>
  );
}

export default TwitterBtn;
