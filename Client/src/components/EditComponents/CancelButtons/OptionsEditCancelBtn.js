import React, {useContext} from 'react';
import {Context} from '../../../Context.js';
import useRedirectTo from '../../../functions/useRedirectTo.js';
import useRestartDefault from '../../../functions/DOMFunctions/useRestartDefault.js';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function OptionsEditCancelBtn () {
  const {colors, refs, edit} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const [message, setMessage] = refs.msg;
  const redirectTo = useRedirectTo();
  const restartDefault = useRestartDefault();
  
  const handleOptionsEditCancelBtn = () => {
    setMessage('Configuration has been canceled');
    restartDefault();
    redirectTo('/box/message');
  };

  return (
    <FontAwesomeIcon
      className={`clipBtn BG-color${colorNumber} text-color${imgBGColor}`}
      onClick={handleOptionsEditCancelBtn}
      icon='ban' />
  );
};

export default OptionsEditCancelBtn;