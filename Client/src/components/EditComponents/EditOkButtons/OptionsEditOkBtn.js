import React, {useContext} from 'react';
import {Context} from '../../../Context.js';
import useRedirectTo from '../../../functions/useRedirectTo.js';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function OptionsEditOkBtn () {
  const {colors, edit} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const redirectTo = useRedirectTo();
  
  const handleOptionsEditOkBtn = () => {
    redirectTo('/box/options');
  };

  return (
    <FontAwesomeIcon
      className={`clipBtn BG-color${colorNumber} text-color${imgBGColor}`}
      onClick={handleOptionsEditOkBtn}
      icon='check' />
  );
};

export default OptionsEditOkBtn;