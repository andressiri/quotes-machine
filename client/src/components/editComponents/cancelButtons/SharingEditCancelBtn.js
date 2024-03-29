import React, {useContext} from 'react';
import {Context} from '../../../Context.js';
import useRedirectTo from '../../../functions/useRedirectTo.js';
import useRestartDefault from '../../../functions/DOMFunctions/useRestartDefault.js';

function SharingEditCancelBtn () {
  const {colors, refs} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const shareChosen = refs.sChosen;
  const emailReference = refs.email;
  const [message, setMessage] = refs.msg;
  const redirectTo = useRedirectTo();
  const restartDefault = useRestartDefault();
  
  const handleSharingEditCancelBtn = () => {
    setMessage('Edition has been canceled');
    restartDefault();
    if (shareChosen.current === 'Email') emailReference.current = '';
    shareChosen.current = '';
    redirectTo('/box/message');
  };

  return (
    <button
      className={`textBtn BG-color${colorNumber} text-color${imgBGColor}`}
      onClick={handleSharingEditCancelBtn}
    >Cancel</button>
  );
};

export default SharingEditCancelBtn;