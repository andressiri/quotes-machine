import React, {useContext} from "react";
import {Context} from "./../../../Context.js";

function BlackTxt () {
  const {colors, quote, auto, groups, refs} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const [hideGroupFour, setHideGroupFour] = groups.gFour;
  let blackTxtState = 'On';

  if (imgBGColor == 7) {
    blackTxtState = 'Off';
  };

  function handleBlackTxt () {
    setColorNumber(7);
  };

  return (
    <button class={`blackBG${blackTxtState} hide${hideGroupFour}`} onClick={handleBlackTxt}></button>
  );
};

export default BlackTxt;