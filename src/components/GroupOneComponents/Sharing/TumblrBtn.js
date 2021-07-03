import React, {useContext} from "react";
import {Context} from "../../../Context.js";
import useStopAuto from '../../../functions/useStopAuto.js';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTumblrSquare} from "@fortawesome/free-brands-svg-icons";
import './../../../styles/icon.scss';
import './../../../styles/RandomColor.scss';


function TumblrBtn() {
  const {colors, quote, auto, groups, refs} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [hideGroupOne, setHideGroupOne] = groups.gOne;
  const [hideGroupTwo, setHideGroupTwo] = groups.gTwo;
  const [hideCancelBtn, setHideCancelBtn] = groups.cancel;
  const [shareChosen, setShareChosen] = refs.sChosen;
  const stopAuto = useStopAuto();
  
  async function handleTumblr () {
    stopAuto();
    setShareChosen('Tumblr');
    setHideGroupOne('On');
    setHideGroupTwo('Off');
    setHideCancelBtn('Off');
    // TO DO disable groupOne buttons and enable groupTwo button
  };  

  return (    
    <FontAwesomeIcon class={`icon text-color${colorNumber} hide${hideGroupOne}`} onClick={handleTumblr} icon={faTumblrSquare} />
  );
}

export default TumblrBtn;