import React, {useContext} from "react";
import {Context} from "../../../Context.js";
import useStopAuto from '../../../functions/useStopAuto.js';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTwitterSquare} from "@fortawesome/free-brands-svg-icons";
import './../../../styles/icon.scss';

function TwitterBtn() {
  const {colors, quote, auto, groups, refs} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [hideGroupOne, setHideGroupOne] = groups.gOne;
  const [hideGroupTwo, setHideGroupTwo] = groups.gTwo;
  const [hideCancelBtn, setHideCancelBtn] = groups.cancel;
  const [shareChosen, setShareChosen] = refs.sChosen;
  const stopAuto = useStopAuto();

  function handleTwitter () {
    stopAuto();
    setShareChosen('Twitter');
    setHideGroupOne('On');
    setHideGroupTwo('Off');
    setHideCancelBtn('Off');
  };

  return (
    <FontAwesomeIcon class={`icon text-color${colorNumber} hide${hideGroupOne}`} onClick={handleTwitter} icon={faTwitterSquare} />
  );
};

export default TwitterBtn;
