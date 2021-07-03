import React, {useContext} from "react";
import {Context} from "./../../../Context.js";

function YellowTxt () {
  const {colors, quote, auto, groups, refs} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const [hideGroupFour, setHideGroupFour] = groups.gFour;
  let yellowTxtState = 'On';
  
  if (imgBGColor == 2) {
    yellowTxtState = 'Off';
  };

  function handleYellowTxt () {
    setColorNumber(2);
  };

  return (
    <button class={`yellowBG${yellowTxtState} hide${hideGroupFour}`} onClick={handleYellowTxt}></button>
  );
};

export default YellowTxt;