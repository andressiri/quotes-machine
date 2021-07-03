import React, {useContext} from "react";
import {Context} from "../../Context.js";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCrown} from "@fortawesome/free-solid-svg-icons";

import useShareImg from '../../functions/useShareImg.js';

function DefaultImgBtn () {
  const {colors, quote, auto, groups, refs} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [hideGroupOne, setHideGroupOne] = groups.gOne;
  const [hideGroupThree, setHideGroupThree] = groups.gThree;
  const [hideCancelBtn, setHideCancelBtn] = groups.cancel;
  const [shareChosen, setShareChosen] = refs.sChosen;
  const shareImg = useShareImg();  
  
  function handleDefaultImg () {
    shareImg();
    setShareChosen(``);
    setHideGroupThree('On');
    setHideCancelBtn('On');
    setHideGroupOne('Off');
    // TO DO enable groupOne buttons and disable groupTwo buttons  
  }  

  return (
    <FontAwesomeIcon class={`icon text-color${colorNumber} hide${hideGroupThree}`} onClick={handleDefaultImg} icon={faCrown} />
  );
};

export default DefaultImgBtn;