import React, {useContext, useEffect} from 'react';
import {Context} from '../../../Context.js';
import useNewQuote from '../../../functions/useNewQuote.js';
import useStopAuto from '../../../functions/useStopAuto.js';
import './../../../styles/AutoBtn.scss';

function AutoBtn () {
  const {colors, auto} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const [handleAuto, setHandleAuto] = auto.hAuto;
  const [autoClass, setAutoClass] = auto.aClass;
  const [autoTime, setAutoTime] = auto.aTime; 
  const newQuote = useNewQuote();
  const stopAuto = useStopAuto();
  let autoText = imgBGColor;
  let autoBG = colorNumber;
  let autoOnOff = 'autoBtn autoBtnOff';
    
  if (autoClass) {
    autoText = colorNumber;
    autoBG = imgBGColor;
    autoOnOff = 'autoBtn autoBtnOn';
  };
  
  async function handleAutoBtn() {
    if (handleAuto == 'Interval is off') {
      setAutoClass(true);
      newQuote();    
      setHandleAuto(setInterval(newQuote, autoTime));
    } else {
      stopAuto();
    };
  };

  return (
    <button className={`${autoOnOff} text-color${autoText} BG-color${autoBG}`} onClick={handleAutoBtn} >Auto</button>
  );
};

export default AutoBtn;