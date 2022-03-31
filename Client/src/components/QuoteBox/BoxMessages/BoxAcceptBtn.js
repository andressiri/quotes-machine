import React, {useContext} from 'react';
import {Context} from '../../../Context.js';
import useRedirectTo from '../../../functions/useRedirectTo.js';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import useRestartDefault from '../../../functions/DOMFunctions/useRestartDefault.js';

function BoxAcceptBtn () {
  const {colors, refs} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const [message, setMessage] = refs.msg;
  const redirectTo = useRedirectTo();
  const restartDefault = useRestartDefault();
  
  async function handleBoxAcceptBtn () {
    if (message === 'Login success') restartDefault();
    setTimeout(() => {  // Timeout to handle transition
      setMessage('');
    }, 250);
    redirectTo('/box/app');  
  }; 

  return (
    <FontAwesomeIcon
      className={`clipBtn BG-color${colorNumber} text-color${imgBGColor}`}
      onClick={handleBoxAcceptBtn}
      icon='check' />
  );
};

export default BoxAcceptBtn;