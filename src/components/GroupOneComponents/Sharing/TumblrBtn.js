import React, {useContext} from "react";
import {Context} from "../../../Context.js";
import useStopAuto from '../../../functions/useStopAuto.js';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTumblrSquare} from "@fortawesome/free-brands-svg-icons";
import './../../../styles/icon.scss';

function TumblrBtn() {
  const {colors, quote, auto, groups, refs} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [groupRef, setGroupRef] = groups.gRef;
  const [hideCancelBtn, setHideCancelBtn] = groups.cancel;
  const [shareChosen, setShareChosen] = refs.sChosen;
  const stopAuto = useStopAuto();
  
  async function handleTumblr () {
    stopAuto();
    setShareChosen('Tumblr');
    setGroupRef('groupTwo');
    setHideCancelBtn(false);
  };  

  return (    
    <FontAwesomeIcon class={`icon text-color${colorNumber}`} onClick={handleTumblr} icon={faTumblrSquare} />
  );
};

export default TumblrBtn;