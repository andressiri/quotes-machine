import React, {useContext} from 'react';
import {Context} from '../../../Context.js';
import useRedirectTo from '../../../functions/useRedirectTo.js';

function CancelDeleteUserBtn () {
  const {colors, refs} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const [message, setMessage] = refs.msg;
  const emailReference = refs.email;
  const auxRef = refs.aux;
  const redirectTo = useRedirectTo();
  
  const handleCancelDeleteUserBtn = () => {
    emailReference.current = '';
    auxRef.current = '';
    setMessage('Account delete has been canceled');
    redirectTo('/box/message');
  };

  return (
    <button
      className={`textBtn BG-color${colorNumber} text-color${imgBGColor}`}
      onClick={handleCancelDeleteUserBtn}
    >Cancel</button>
  );
};

export default CancelDeleteUserBtn;