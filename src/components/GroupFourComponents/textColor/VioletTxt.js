import React, {useContext} from "react";
import {Context} from "./../../../Context.js";

function VioletTxt () {
  const {colors, quote, auto, groups, refs} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const [hideGroupFour, setHideGroupFour] = groups.gFour;
  let violetTxtState = 'On';
  
  if (imgBGColor == 6) {
    violetTxtState = 'Off';
  };

  function handleVioletTxt () {
    setColorNumber(6);
  };

  return (
    <button class={`violetBG${violetTxtState} hide${hideGroupFour}`} onClick={handleVioletTxt}></button>
  );
};

export default VioletTxt;