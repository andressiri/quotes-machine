import React, {useState, useContext} from 'react';
import{Context} from './../Context.js';
import './../styles/RandomColor.scss';
import './../styles/SetAutoTimeBtn.css';

function SetAutoTimeBtn() {
  const {colorNum, quote, auth, auto, aClass, aTime} = useContext(Context);
  const [colorNumber, setColorNumber] = colorNum;
  const [handleAuto, setHandleAuto] = auto;
  const [autoClass, setAutoClass] = aClass;
  const [autoTime, setAutoTime] = aTime;
  const [seconds, setSeconds] = useState('10s');
    
  function handleTime () {
     if (handleAuto !== 'Interval is off') {
      setAutoClass('autoBtn btnOff BG-color'); 
      clearInterval(handleAuto);
      setHandleAuto('Interval is off');    
    }
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
    <button onClick={handleTime} className={`timeBtn BG-color${colorNumber}`}>{seconds}</button>
  );
}

export default SetAutoTimeBtn;
