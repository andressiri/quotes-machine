import React, {useContext} from "react";
import {Context} from "../../Context.js";
import useRedirectTo from "../../functions/useRedirectTo.js";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import useShareImg from '../../functions/useShareImg.js';

function SendCustomBtn () {
  const {colors, refs} = useContext(Context);
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const [shareChosen, setShareChosen] = refs.sChosen;
  const shareImg = useShareImg();
  const redirectTo = useRedirectTo();  
  
  async function handleSendCustom () {
    await shareImg();
    setShareChosen('');
    redirectTo('/box/app');
    setImgBGColor(8);
  }; 

  return (
    <FontAwesomeIcon className={`icon`} onClick={handleSendCustom} icon="check-square" />
  );
};

export default SendCustomBtn;