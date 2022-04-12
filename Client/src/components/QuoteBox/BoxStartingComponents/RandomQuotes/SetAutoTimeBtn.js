import React, {useContext} from 'react';
import{Context} from '../../../../Context.js';
import useStopAuto from '../../../../functions/quoteFunctions/useStopAuto.js';

function SetAutoTimeBtn() {
  const {colors, auto} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const [autoTime, setAutoTime] = auto.aTime;
  const [autoClass, setAutoClass] = auto.aClass;
  const [autoSeconds, setAutoSeconds] = auto.sec;
  const stopAuto = useStopAuto();
  let setText = imgBGColor;
  let setBG = colorNumber;
  let setOnOff = 'timeBtnOff';
    
  if (autoClass) {
    setText = colorNumber;
    setBG = imgBGColor;
    setOnOff = 'timeBtnOn';
  };

  const handleTime = () => {
    stopAuto();
    switch (autoTime) {
      case 5000:
        setAutoTime(10000);
        setAutoSeconds(10);
        break;
      case 10000:
        setAutoTime(15000);
        setAutoSeconds(15);
        break;
      case 15000:
        setAutoTime(5000);
        setAutoSeconds(5);
        break;
      // no default
    };
  };
  
  return (
    <button
      className={`${setOnOff} text-color${setText} BG-color${setBG}`}
      aria-label='Set time for Auto'
      onClick={handleTime}
    >{autoSeconds}s</button>
  );
};

export default SetAutoTimeBtn;
