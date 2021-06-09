import React, {useContext} from 'react';
import {Context} from './../Context.js';
import useNewQuote from '../functions/useNewQuote.js';
import useStopAuto from '../functions/useStopAuto.js';
import './../styles/RandomColor.scss';
import './../styles/AutoBtn.scss';

function AutoBtn () {
  const {colorNum, quote, auth, auto, aClass, aTime} = useContext(Context);
  const [colorNumber, setColorNumber] = colorNum;
  const [handleAuto, setHandleAuto] = auto;
  const [autoClass, setAutoClass] = aClass;
  const [autoTime, setAutoTime] = aTime; 
  const newQuote = useNewQuote();
  const stopAuto = useStopAuto();
  
  function handleAutoBtn() { 
    if (handleAuto == 'Interval is off') {
      setAutoClass('autoBtn btnOn text-color') 
      newQuote();    
      setHandleAuto(setInterval(newQuote, autoTime));
    } else {
      stopAuto();
    };
  };

  return (
    <button className={`${autoClass}${colorNumber}`} onClick={handleAutoBtn} >Auto</button>
  );
}

export default AutoBtn;