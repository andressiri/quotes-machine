import React, {useContext} from "react";
import {Context} from "../Context.js";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faReply} from "@fortawesome/free-solid-svg-icons";

function ShareCancel () {
  const {colors, quote, auto, groups, refs} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [groupRef, setGroupRef] = groups.gRef;
  const [hideCancelBtn, setHideCancelBtn] = groups.cancel;
  const [shareChosen, setShareChosen] = refs.sChosen;

  function handleShareCancel () {
    setGroupRef('groupOne');
    setShareChosen('');
  };
  
  if (hideCancelBtn) {
    return (
      <div/>
    );
  } else {
    return (
      <FontAwesomeIcon class={`icon cancel text-color${colorNumber}`} onClick={handleShareCancel} icon={faReply} />
    );
  };
};

export default ShareCancel;