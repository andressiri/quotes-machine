import React, {useState, useContext} from "react";
import { Context } from "./../Context.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTumblrSquare } from "@fortawesome/free-brands-svg-icons";
import './../styles/icon.css';
import './../styles/RandomColor.scss';

function TumblrBtn() {
  const {colorNum, quote, auth} = useContext(Context);
  const [colorNumber, setColorNumber] = colorNum;
  const [quoteText, setQuoteText] = quote;  
  const [author, setAuthor] = auth;

  return (
    <a id="tweet-quote" href={`https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes&caption=${author}&content=${quoteText}%20&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button`}>
      <FontAwesomeIcon icon={faTumblrSquare} class={`icon text-color${colorNumber}`} />
    </a>
  );
}

export default TumblrBtn;
