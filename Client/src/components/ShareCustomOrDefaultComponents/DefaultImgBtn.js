import React, {useContext} from "react";
import {Context} from "../../Context.js";
import useRedirectTo from "../../functions/useRedirectTo.js";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import useShareImg from '../../functions/useShareImg.js';

function DefaultImgBtn () {
  const {colors, refs} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [shareChosen, setShareChosen] = refs.sChosen;
  const shareImg = useShareImg(); 
  const redirectTo = useRedirectTo(); 
  
  function handleDefaultImg () {
    shareImg();
    setShareChosen('');
    redirectTo('/box/app');
  };  

  return (
    <FontAwesomeIcon className={`icon text-color${colorNumber}`} onClick={handleDefaultImg} icon="check" />
  );
};

export default DefaultImgBtn;