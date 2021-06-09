import React, {useContext} from "react";
import {Context} from "../Context.js";
import useStopAuto from '../functions/useStopAuto.js';
import domtoimage from 'dom-to-image';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCameraRetro} from "@fortawesome/free-solid-svg-icons";
import './../styles/icon.scss';
import './../styles/RandomColor.scss';

function ImgToClipboard() {
  const {colorNum, quote, auth, auto, aClass, aTime, ref} = useContext(Context);
  const [colorNumber, setColorNumber] = colorNum;
  const quoteRef = ref;
  const stopAuto = useStopAuto();
  const {ClipboardItem} = window;
  let color = 'rgb(220, 220, 220)'; //bonded to $boxBG from _variables.scss  

  async function handleScreenshot() {
    stopAuto();
    await domtoimage.toBlob(quoteRef.current, {style: {backgroundColor: color}})
    .then(async function (blob) {
      await navigator.clipboard.write([new ClipboardItem({ 'image/png': blob})]);
    });    
    alert('Screenshot took on clipboard'); 
  }

 return (
    <FontAwesomeIcon class={`icon text-color${colorNumber}`} onClick={handleScreenshot} icon={faCameraRetro} />      
  )
};

export default ImgToClipboard;