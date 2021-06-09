import React, {useContext} from "react";
import {Context} from "./../Context.js";
import useStopAuto from '../functions/useStopAuto.js';
import clickLink from '../functions/clickLink.js';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTwitterSquare} from "@fortawesome/free-brands-svg-icons";
import './../styles/icon.scss';
import './../styles/RandomColor.scss';

function TwitterBtn() {
  const {colorNum, quote, auth, auto, aClass} = useContext(Context);
  const [colorNumber, setColorNumber] = colorNum;
  const [quoteText, setQuoteText] = quote;  
  const [author, setAuthor] = auth;
  const stopAuto = useStopAuto();

  function handleTwitter () {
    stopAuto();
    const link = `http://twitter.com/intent/tweet?hashtags=quotes&realted=elsirook&text="${quoteText}"%20-%20${author}`;  
    clickLink(link);
  }

  return (
    <FontAwesomeIcon class={`icon text-color${colorNumber}`} onClick={handleTwitter} icon={faTwitterSquare} />
  );
}

export default TwitterBtn;
