import React, {useState, useContext} from 'react';
import{Context} from './../Context.js';
import useStopAuto from '../functions/useStopAuto.js';
import './../styles/RandomColor.scss';
import './../styles/SetAutoTimeBtn.scss';

function SetAutoTimeBtn() {
  const {colorNum, quote, auth, auto, aClass, aTime} = useContext(Context);
  const [colorNumber, setColorNumber] = colorNum;
  const [autoTime, setAutoTime] = aTime;
  const [seconds, setSeconds] = useState('10s');
  const stopAuto = useStopAuto();
    
  function handleTime () {
    stopAuto();
    switch (autoTime) {
      case 5000:
        setAutoTime(10000);
        setSeconds('10s');
        break;
      case 10000:
        setAutoTime(15000);
        setSeconds('15s');
        break;
      case 15000:
        setAutoTime(5000);
        setSeconds('5s');
        break;
    };
  }
  
  return (
    <button className={`timeBtn BG-color${colorNumber}`} onClick={handleTime} >{seconds}</button>
  );
}

export default SetAutoTimeBtn;
