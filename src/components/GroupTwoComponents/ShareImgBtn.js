import React, {useContext} from "react";
import {Context} from "./../../Context.js";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faReply} from "@fortawesome/free-solid-svg-icons";

function ShareImgBtn () {
  const {colors, quote, auto, groups, refs} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [groupRef, setGroupRef] = groups.gRef;
   
  function handleShareImg () {
    setGroupRef('groupThree');
  };  

  return (
    <FontAwesomeIcon class={`icon text-color${colorNumber}`} onClick={handleShareImg} icon={faReply} />
  );
};

export default ShareImgBtn;