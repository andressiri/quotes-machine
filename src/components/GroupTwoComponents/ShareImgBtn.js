import React, {useContext} from "react";
import {Context} from "../../Context.js";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faReply} from "@fortawesome/free-solid-svg-icons";

function ShareImgBtn () {
  const {colors, quote, auto, groups, refs} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [hideGroupTwo, setHideGroupTwo] = groups.gTwo;
  const [hideGroupThree, setHideGroupThree] = groups.gThree;
   
  function handleShareImg () {
    setHideGroupTwo('On');
    setHideGroupThree('Off');
    // TO DO enable groupOne buttons and disable groupTwo buttons  
  }  

  return (
    <FontAwesomeIcon class={`icon text-color${colorNumber} hide${hideGroupTwo}`} onClick={handleShareImg} icon={faReply} />
  );
};

export default ShareImgBtn;