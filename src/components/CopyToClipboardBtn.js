import React, {useContext} from "react";
import {Context} from "./../Context.js";
import useStopAuto from '../functions/useStopAuto.js'; 
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPaperclip} from "@fortawesome/free-solid-svg-icons";
import './../styles/RandomColor.scss';
import './../styles/CopyToClipboardBtn.scss';

function CopyToClipboardBtn() {
  const {colorNum, quote, auth, auto, aClass} = useContext(Context);
  const [colorNumber, setColorNumber] = colorNum;
  const [quoteText, setQuoteText] = quote;  
  const [author, setAuthor] = auth;
  const stopAuto = useStopAuto();

  async function handleCopyToClip () {
    stopAuto();
    await navigator.clipboard.writeText(`"${quoteText}" - ${author}`);     
    alert(`Copied: "${quoteText}" - ${author}`);
  }

  return (
    <FontAwesomeIcon class={`clipBtn BG-color${colorNumber}`} onClick={handleCopyToClip} icon={faPaperclip} />
  );
}

export default CopyToClipboardBtn;