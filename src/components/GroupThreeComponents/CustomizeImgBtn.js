import React, {useContext} from "react";
import {Context} from "../../Context.js";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";


function CustomizeImgBtn () {
  const {colors, quote, auto, groups, refs} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [groupRef, setGroupRef] = groups.gRef;
  
  function handleCustomizeImg () {
    setGroupRef('groupFour');
  };  

  return (
    <FontAwesomeIcon class={`icon text-color${colorNumber}`} onClick={handleCustomizeImg} icon={faStar} />
  );
};

export default CustomizeImgBtn;