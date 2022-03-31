import React, {useContext} from 'react';
import {Context} from '../../../Context.js';
import useRedirectTo from '../../../functions/useRedirectTo.js';
import useRestartDefault from '../../../functions/DOMFunctions/useRestartDefault.js';

function SharingEditCancelBtn () {
  const {colors, refs} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const shareChosen = refs.sChosen;
  const [message, setMessage] = refs.msg;
  const redirectTo = useRedirectTo();
  const restartDefault = useRestartDefault();
  
  function handleSharingEditCancelBtn () {
    setMessage('Edition has been canceled');
    restartDefault();
    shareChosen.current = '';
    redirectTo('/box/message');
  }; 

  return (
    <button
    className={`NQbtn BG-color${colorNumber} text-color${imgBGColor}`}
    onClick={handleSharingEditCancelBtn}
    >Cancel</button>
  );
};

export default SharingEditCancelBtn;