import React, {useContext} from "react";
import {Context} from "../../Context.js";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faReply} from "@fortawesome/free-solid-svg-icons";
import useShareTxt from '../../functions/useShareTxt.js';

function ShareTxtBtn () {
  const {colors, quote, auto, groups, refs} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [groupRef, setGroupRef] = groups.gRef;
  const [hideCancelBtn, setHideCancelBtn] = groups.cancel;
  const [shareChosen, setShareChosen] = refs.sChosen;
  const shareTxt = useShareTxt();  
  
  function handleShareTxt () {
    shareTxt();
    setShareChosen(``);
    setHideCancelBtn(true);
    setGroupRef('groupOne');
  };  

  return (
    <FontAwesomeIcon class={`icon text-color${colorNumber}`} onClick={handleShareTxt} icon={faReply} />
  );
};

export default ShareTxtBtn;