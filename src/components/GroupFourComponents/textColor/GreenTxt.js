import React, {useContext} from "react";
import {Context} from "./../../../Context.js";

function GreenTxt () {
  const {colors, quote, auto, groups, refs} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const [hideGroupFour, setHideGroupFour] = groups.gFour;
  let greenTxtState = 'On';
  
  if (imgBGColor == 3) {
    greenTxtState = 'Off';
  };

  function handleGreenTxt () {
    setColorNumber(3);
  };

  return (
    <button class={`greenBG${greenTxtState} hide${hideGroupFour}`} onClick={handleGreenTxt}></button>
  );
};

export default GreenTxt;