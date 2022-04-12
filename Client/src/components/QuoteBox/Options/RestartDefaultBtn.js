import React, {useContext, useState} from 'react';
import {Context} from '../../../Context.js';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function RestartDefaultBtn () {
  const {colors, edit} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const [restartDefaultObj, setRestartDefaultObj] = edit.auto;
  const [isLoading, setIsLoading] = useState(false);
  
  const handleRestartDefaultBtn = () => {
    if (isLoading) return;
    setIsLoading(true);
    setRestartDefaultObj(!restartDefaultObj);
    setIsLoading(false);
  };

  return (
    <div>
      {restartDefaultObj === true
        ? <FontAwesomeIcon
            className={`clipBtn BG-color${colorNumber} text-color${imgBGColor}`}
            onClick={handleRestartDefaultBtn}
            icon='check' />
        : <FontAwesomeIcon
            className={`clipBtn BG-color${colorNumber} text-color${imgBGColor}`}
            onClick={handleRestartDefaultBtn}
            icon='times' />
      }
    </div>
  );
};

export default RestartDefaultBtn;