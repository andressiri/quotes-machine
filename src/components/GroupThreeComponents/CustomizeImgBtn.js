import React, {useContext} from "react";
import {Context} from "../../Context.js";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";


function CustomizeImgBtn () {
  const {colors, quote, auto, groups, refs} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [hideGroupThree, setHideGroupThree] = groups.gThree;
  const [hideGroupFour, setHideGroupFour] = groups.gFour;
  
  function handleCustomizeImg () {
    setHideGroupThree('On');
    setHideGroupFour('Off');
  };  

  return (
    <FontAwesomeIcon class={`icon text-color${colorNumber} hide${hideGroupThree}`} onClick={handleCustomizeImg} icon={faStar} />
  );
};

export default CustomizeImgBtn;