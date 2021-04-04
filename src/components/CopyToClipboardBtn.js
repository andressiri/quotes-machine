import React, {useState, useContext} from "react";
import { Context } from "./../Context.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './../styles/RandomColor.scss';
import './../styles/CopyToClipboardBtn.css'; 

function CopyToClipboardBtn() {
  const {colorNum, quote, auth} = useContext(Context);
  const [colorNumber, setColorNumber] = colorNum;
  const [quoteText, setQuoteText] = quote;  
  const [author, setAuthor] = auth;

  function handleClipClick () {
    alert(`Copied: "${quoteText}" - ${author}`);
  }

  return (
    <a id="clipboard-btn" href='#' >
      <CopyToClipboard text={`"${quoteText}" - ${author}`}>
        <FontAwesomeIcon icon={faPaperclip} class={`clipBtn BG-color${colorNumber}`} onClick={handleClipClick} />
      </CopyToClipboard>
    </a>
  );
}

export default CopyToClipboardBtn;