import React, {useContext} from "react";
import {Context} from "../../../Context.js";

function RedTxt () {
  const {colors, quote, auto, groups, refs} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const [hideGroupFour, setHideGroupFour] = groups.gFour;
  let redTxtState = 'On';
  
  if (imgBGColor == 0) {
    redTxtState = 'Off';
  };

  function handleRedTxt () {
    setColorNumber(0);
  };

  return (
    <button class={`redBG${redTxtState} hide${hideGroupFour}`} onClick={handleRedTxt}></button>
  );
};

export default RedTxt;