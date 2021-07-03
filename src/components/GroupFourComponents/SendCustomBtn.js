import React, {useContext} from "react";
import {Context} from "../../Context.js";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";

import useShareImg from '../../functions/useShareImg.js';

function SendCustomBtn () {
  const {colors, quote, auto, groups, refs} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [hideGroupOne, setHideGroupOne] = groups.gOne;
  const [hideGroupFour, setHideGroupFour] = groups.gFour;
  const [hideCancelBtn, setHideCancelBtn] = groups.cancel;
  const [shareChosen, setShareChosen] = refs.sChosen;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const shareImg = useShareImg();  
  
  async function handleSendCustom () {
    await shareImg();
    setShareChosen('');
    setHideGroupFour('On');
    setHideGroupOne('Off');
    setHideCancelBtn('On');
    setImgBGColor(8);
  }  

  return (
    <FontAwesomeIcon class={`icon text-color${colorNumber} hide${hideGroupFour}`} onClick={handleSendCustom} icon={faStar} />
  );
};

export default SendCustomBtn;