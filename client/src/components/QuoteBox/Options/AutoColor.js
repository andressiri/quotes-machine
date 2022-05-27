import React, {useContext, useState} from 'react';
import {Context} from '../../../Context.js';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function AutoColor () {
  const {colors} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const [autoColorChange, setAutoColorChange] = colors.auto;
  const [isLoading, setIsLoading] = useState(false);
  
  const handleAutoColor = () => {
    if (isLoading) return;
    setIsLoading(true);
    setAutoColorChange(!autoColorChange);
    setIsLoading(false);
  };

  return (
    <div className={'optionsDiv'}>
      {autoColorChange === true
        ? <FontAwesomeIcon
            className={`BG-color${colorNumber} text-color${imgBGColor} optionsBtn`}
            onClick={handleAutoColor}
            icon='check'
          />
        : <FontAwesomeIcon
            className={`BG-color${colorNumber} text-color${imgBGColor} optionsBtn fixOptionsBtn`}
            onClick={handleAutoColor}
            icon='times'
          />
      }
      <h3
        className={`BG-color${colorNumber} text-color${imgBGColor} optionsText`}
        onClick={handleAutoColor}
      >Automatic color change</h3>
    </div>
  );
};

export default AutoColor;