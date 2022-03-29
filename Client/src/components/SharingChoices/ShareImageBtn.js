import React, {useContext} from "react";
import {Context} from "../../Context.js";
import useRedirectTo from "../../functions/useRedirectTo.js";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import useShareImg from '../../functions/useShareImg.js';

function ShareImageBtn () {
  const {colors, refs} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const [shareChosen, setShareChosen] = refs.sChosen;
  const [message, setMessage] = refs.msg;
  const shareImg = useShareImg(); 
  const redirectTo = useRedirectTo(); 
  
  function handleShareImageBtn () {
    shareImg();
    setMessage('Quote has been shared');
    if (shareChosen === 'Clipboard') setMessage('Quote has been copied to clipboard');
    setShareChosen('');
    redirectTo('/box/message');
  };  

  return (
    <FontAwesomeIcon
      className={`clipBtn BG-color${colorNumber} text-color${imgBGColor}`}
      onClick={handleShareImageBtn}
      icon="image" />
  );
};

export default ShareImageBtn;