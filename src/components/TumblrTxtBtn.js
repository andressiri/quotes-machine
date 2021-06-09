import React, {useContext} from "react";
import {Context} from "../Context.js";
import useStopAuto from '../functions/useStopAuto.js';
import clickLink from "../functions/clickLink.js";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTumblrSquare} from "@fortawesome/free-brands-svg-icons";
import './../styles/icon.scss';
import './../styles/RandomColor.scss';

function TumblrTxtBtn() {
  const {colorNum, quote, auth, auto, aClass} = useContext(Context);
  const [colorNumber, setColorNumber] = colorNum;
  const [quoteText, setQuoteText] = quote;  
  const [author, setAuthor] = auth;
  const stopAuto = useStopAuto();
  
  function handleTumblrTxt () {
    stopAuto();
    const link = `https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes&caption=${author}&content=${quoteText}%20&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button`;
    clickLink(link);
  }

  return (
    <FontAwesomeIcon onClick={handleTumblrTxt} class={`icon text-color${colorNumber}`} icon={faTumblrSquare} />
  );
}

export default TumblrTxtBtn;
