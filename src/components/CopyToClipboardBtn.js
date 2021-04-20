import React, {useState, useContext} from "react";
import { Context } from "./../Context.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";
import './../styles/RandomColor.scss';
import './../styles/CopyToClipboardBtn.scss'; 

function CopyToClipboardBtn() {
  const {colorNum, quote, auth, auto, aClass} = useContext(Context);
  const [colorNumber, setColorNumber] = colorNum;
  const [quoteText, setQuoteText] = quote;  
  const [author, setAuthor] = auth;
  const [handleAuto, setHandleAuto] = auto;
  const [autoClass, setAutoClass] = aClass;

  async function handleCopyToClip () {
    if (handleAuto !== 'Interval is off') {
      setAutoClass('autoBtn btnOff BG-color'); 
      clearInterval(handleAuto);
      setHandleAuto('Interval is off');    
    }
    await navigator.clipboard.writeText(`"${quoteText}" - ${author}`);     
    alert(`Copied: "${quoteText}" - ${author}`);
  }

  return (
    <a id="clipboard-btn" href='#' > 
        <FontAwesomeIcon icon={faPaperclip} class={`clipBtn BG-color${colorNumber}`} onClick={handleCopyToClip} />
    </a>
  );
}

export default CopyToClipboardBtn;