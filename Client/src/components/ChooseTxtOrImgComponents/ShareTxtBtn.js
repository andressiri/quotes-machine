import React, {useContext} from "react";
import {Context} from "../../Context.js";
import useRedirectTo from "../../functions/useRedirectTo.js";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import useShareTxt from '../../functions/useShareTxt.js';

function ShareTxtBtn () {
  const {colors, refs} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [shareChosen, setShareChosen] = refs.sChosen;
  const shareTxt = useShareTxt(); 
  const redirectTo = useRedirectTo();
   
  
  function handleShareTxt () {
    shareTxt();
    setShareChosen('');
    redirectTo('/');
  };  

  return (
    <FontAwesomeIcon className={`icon text-color${colorNumber}`} onClick={handleShareTxt} icon="file-word" />
  );
};

export default ShareTxtBtn;