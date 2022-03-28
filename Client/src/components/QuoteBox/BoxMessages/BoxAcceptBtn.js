import React, {useContext} from 'react';
import {Context} from '../../../Context.js';
import useRedirectTo from '../../../functions/useRedirectTo.js';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function BoxAcceptBtn () {
  const {colors, refs} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const [message, setMessage] = refs.msg;
  const redirectTo = useRedirectTo();

  
  async function handleBoxAcceptBtn () {
    setTimeout(() => {  // Timeout to handle transition
      setMessage('');
    }, 250);
    redirectTo('/box/app');  
  }; 

  return (
    <FontAwesomeIcon className={`clipBtn BG-color${colorNumber} text-color${imgBGColor}`} onClick={handleBoxAcceptBtn} icon='check' />
  );
};

export default BoxAcceptBtn;