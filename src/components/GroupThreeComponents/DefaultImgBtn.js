import React, {useContext} from "react";
import {Context} from "../../Context.js";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCrown} from "@fortawesome/free-solid-svg-icons";
import useShareImg from '../../functions/useShareImg.js';

function DefaultImgBtn () {
  const {colors, quote, auto, groups, refs} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [groupRef, setGroupRef] = groups.gRef;
  const [hideCancelBtn, setHideCancelBtn] = groups.cancel;
  const [shareChosen, setShareChosen] = refs.sChosen;
  const shareImg = useShareImg();  
  
  function handleDefaultImg () {
    shareImg();
    setShareChosen(``);
    setHideCancelBtn(true);
    setGroupRef('groupOne');
  };  

  return (
    <FontAwesomeIcon class={`icon text-color${colorNumber}`} onClick={handleDefaultImg} icon={faCrown} />
  );
};

export default DefaultImgBtn;