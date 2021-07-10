import React, {useState, useContext} from 'react';
import{Context} from '../../../Context.js';
import useStopAuto from '../../../functions/useStopAuto.js';
import './../../../styles/SetAutoTimeBtn.scss';

function SetAutoTimeBtn() {
  const {colors, quote, auto, groups, refs} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const [autoTime, setAutoTime] = auto.aTime;
  const [autoClass, setAutoClass] = auto.aClass;
  const [seconds, setSeconds] = useState('10s');
  const stopAuto = useStopAuto();
  let setText = imgBGColor;
  let setBG = colorNumber;
  let setOnOff = 'timeBtnOff';
    
  if (autoClass) {
    setText = colorNumber;
    setBG = imgBGColor;
    setOnOff = 'timeBtnOn';
  };

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
  };
  
  return (
    <button className={`${setOnOff} text-color${setText} BG-color${setBG}`} aria-label="Set time for Auto" onClick={handleTime} >{seconds}</button>
  );
};

export default SetAutoTimeBtn;
