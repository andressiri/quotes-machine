import React, { useState, useContext, useRef, useEffect} from "react";
import { Context } from "../Context.js";
import domtoimage from 'dom-to-image';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCameraRetro } from "@fortawesome/free-solid-svg-icons";
import './../styles/icon.scss';
import './../styles/RandomColor.scss';


function ImgToClipboard() {
  const {colorNum, quote, auth, auto, aClass, aTime, ref} = useContext(Context);
  const [colorNumber, setColorNumber] = colorNum;
  const [handleAuto, setHandleAuto] = auto;
  const [autoClass, setAutoClass] = aClass;
  const quoteRef = ref;
  
  async function handleScreenshot() {
    if (handleAuto !== 'Interval is off') {
      setAutoClass('autoBtn btnOff BG-color'); 
      clearInterval(handleAuto);
      setHandleAuto('Interval is off');    
    };
    let color = 'rgb(220, 220, 220)'; //bonded to $boxBG from _variables.scss   
    const { ClipboardItem } = window;
    await domtoimage.toBlob(quoteRef.current, {style: {backgroundColor: color}})
    .then(async function (blob) {
      console.log(blob); 
      await navigator.clipboard.write([new ClipboardItem({ 'image/png': blob})]);
    });    
    alert('Screenshot took'); 
  }

 return (
    <div  onClick={handleScreenshot} id="screenshot">
      <FontAwesomeIcon icon={faCameraRetro} class={`icon text-color${colorNumber}`} />      
    </div>
  )
};

export default ImgToClipboard;