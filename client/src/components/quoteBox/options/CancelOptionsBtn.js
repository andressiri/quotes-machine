import React, {useContext} from 'react';
import {Context} from '../../../Context.js';
import useRedirectTo from '../../../functions/useRedirectTo.js';
import useRestartDefault from '../../../functions/DOMFunctions/useRestartDefault.js';

function CancelOptionsBtn () {
  const {colors, refs} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const [message, setMessage] = refs.msg;
  const redirectTo = useRedirectTo();
  const restartDefault = useRestartDefault();
  
  const handleCancelOptionsBtn = () => {
    setMessage('Configuration has been canceled');
    restartDefault();
    redirectTo('/box/message');
  };

  return (
    <button
      className={`textBtn BG-color${colorNumber} text-color${imgBGColor}`}
      onClick={handleCancelOptionsBtn}
    >Cancel</button>
  );
};

export default CancelOptionsBtn;