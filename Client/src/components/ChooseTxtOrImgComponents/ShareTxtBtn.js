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
  const shareTxt = useShareTxt(); 
  const redirectTo = useRedirectTo();
   
  
  function handleShareTxt () {
    shareTxt();
    setShareChosen('');
    redirectTo('/box/app');
  };  

  return (
    <FontAwesomeIcon className={`clipBtn BG-color${colorNumber} text-color${imgBGColor}`} onClick={handleShareTxt} icon="file-word" />
  );
};

export default ShareTxtBtn;