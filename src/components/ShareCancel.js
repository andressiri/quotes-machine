import React, {useContext} from "react";
import {Context} from "../Context.js";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faReply} from "@fortawesome/free-solid-svg-icons";

function ShareCancel () {
  const {colors, quote, auto, groups, refs} = useContext(Context);
    const [colorNumber, setColorNumber] = colors.colorNum;
    const [hideGroupOne, setHideGroupOne] = groups.gOne;
    const [hideGroupTwo, setHideGroupTwo] = groups.gTwo;
    const [hideGroupThree, setHideGroupThree] = groups.gThree;
    const [hideGroupFour, setHideGroupFour] = groups.gFour;
    const [hideCancelBtn, setHideCancelBtn] = groups.cancel;
    const [shareChosen, setShareChosen] = refs.sChosen;

  function handleShareCancel () {
    setHideGroupTwo('On');
    setHideGroupThree('On');
    setHideGroupFour('On');
    setHideCancelBtn('On');
    setHideGroupOne('Off');
    setShareChosen('');
  };  

  return (
    <FontAwesomeIcon class={`icon text-color${colorNumber} hide${hideCancelBtn}`} onClick={handleShareCancel} icon={faReply} />
  );
};

export default ShareCancel;