import React, {useContext, useState} from 'react';
import {Context} from '../../../Context.js';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function RestartDefault () {
  const {colors, edit} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const [restartDefaultObj, setRestartDefaultObj] = edit.auto;
  const [isLoading, setIsLoading] = useState(false);
  
  const handleRestartDefault = () => {
    if (isLoading) return;
    setIsLoading(true);
    setRestartDefaultObj(!restartDefaultObj);
    setIsLoading(false);
  };

  return (
    <div className={'optionsDiv'}>
      {restartDefaultObj === true
        ? <FontAwesomeIcon
            className={`BG-color${colorNumber} text-color${imgBGColor} optionsBtn`}
            onClick={handleRestartDefault}
            icon='check'
          />
        : <FontAwesomeIcon
            className={`BG-color${colorNumber} text-color${imgBGColor} optionsBtn fixOptionsBtn`}
            onClick={handleRestartDefault}
            icon='times'
          />
      }
      <h3 
        className={`BG-color${colorNumber} text-color${imgBGColor} optionsText`}
        onClick={handleRestartDefault}
      >Auto restart configuration</h3>
    </div>
  );
};

export default RestartDefault;