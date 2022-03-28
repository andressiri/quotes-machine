import React, {useContext} from "react";
import {Context} from "../../Context.js";
import useRedirectTo from "../../functions/useRedirectTo.js";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import useShareTxt from '../../functions/useShareTxt.js';

function ShareTxtBtn () {
  const {colors, refs} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const [shareChosen, setShareChosen] = refs.sChosen;
  const [message, setMessage] = refs.msg;
  const shareTxt = useShareTxt(); 
  const redirectTo = useRedirectTo();
   
  
  function handleShareTxt () {
    shareTxt();
    setMessage('Quote has been shared');
    if (shareChosen === 'Clipboard') setMessage('Quote has been copied to clipboard');
    setShareChosen('');
    redirectTo('/box/message');
  };  

  return (
    <FontAwesomeIcon className={`clipBtn BG-color${colorNumber} text-color${imgBGColor}`} onClick={handleShareTxt} icon="file-word" />
  );
};

export default ShareTxtBtn;