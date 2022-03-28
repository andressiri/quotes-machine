import React, {useContext} from 'react';
import {Context} from '../../../Context.js';
import useRedirectTo from '../../../functions/useRedirectTo.js';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function WallAcceptBtn () {
  const {colors, refs} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const [messagesArray, setMessagesArray] = refs.msg;
  const redirectTo = useRedirectTo();

  
  async function handleWallAcceptBtn () {
    setTimeout(() => {  // Timeout to handle transition
      setMessagesArray([]);         
    }, 250);
    redirectTo('/wall');  
  }; 

  return (
    <FontAwesomeIcon className={`clipBtn BG-color${colorNumber} text-color${imgBGColor}`} onClick={handleWallAcceptBtn} icon='check' />
  );
};

export default WallAcceptBtn;