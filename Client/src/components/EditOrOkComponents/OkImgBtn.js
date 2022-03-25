import React, {useContext} from "react";
import {Context} from "../../Context.js";
import useRedirectTo from "../../functions/useRedirectTo.js";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import useShareImg from '../../functions/useShareImg.js';

function OkImgBtn () {
  const {colors, refs} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const [shareChosen, setShareChosen] = refs.sChosen;
  const [messagesArray, setMessagesArray] = refs.msg;
  const shareImg = useShareImg(); 
  const redirectTo = useRedirectTo(); 
  
  function handleOkImgBtn () {
    shareImg();
    setMessagesArray(['Quote has been shared']);
    if (shareChosen === 'Clipboard') setMessagesArray(['Quote has been copied to clipboard']);
    setShareChosen('');
    redirectTo('/box/message');
  };  

  return (
    <FontAwesomeIcon className={`clipBtn BG-color${colorNumber} text-color${imgBGColor}`} onClick={handleOkImgBtn} icon="check" />
  );
};

export default OkImgBtn;