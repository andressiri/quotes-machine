import React, {useContext} from 'react';
import {Context} from '../../../Context.js';
import useRedirectTo from '../../../functions/useRedirectTo.js';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function WallAcceptBtn ({parentToChild}) {
  const {colors, quote, refs} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const [savedQuotesArray, setSavedQuotesArray] = quote.saved;
  const [savedQuotesBackup, setSavedQuotesBackup] = quote.backup;
  const [message, setMessage] = refs.msg;
  const redirectTo = useRedirectTo();

  
  async function handleWallAcceptBtn () {
    setTimeout(() => {  // Timeout to handle transition
      setMessage('');         
    }, 250);
    redirectTo('/wall');  
  }; 

  return (
    <FontAwesomeIcon className={`clipBtn BG-color${parentToChild.config.colorNum} text-color${parentToChild.config.imgBG}`} onClick={handleWallAcceptBtn} icon='check' />
  );
};

export default WallAcceptBtn;