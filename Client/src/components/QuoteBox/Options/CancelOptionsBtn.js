import React, {useContext} from 'react';
import {Context} from '../../../Context.js';
import useRedirectTo from '../../../functions/useRedirectTo.js';
import useRestartDefault from '../../../functions/useRestartDefault.js';

function CancelOptionsBtn () {
  const {colors, refs, edit} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const [message, setMessage] = refs.msg;
  const redirectTo = useRedirectTo();
  const restartDefault = useRestartDefault();
  
  async function handleCancelOptionsBtn () {
    setMessage('Configuration has been canceled');
    restartDefault();    
    redirectTo('/box/message');
  }; 

  return (
    <button
      className={`NQbtn BG-color${colorNumber} text-color${imgBGColor}`}
      onClick={handleCancelOptionsBtn}
      >Cancel</button>
  );
};

export default CancelOptionsBtn;