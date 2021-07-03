import React, {useContext} from "react";
import {Context} from "./../../../Context.js";

function YellowBG () {
  const {colors, quote, auto, groups, refs} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const [hideGroupFour, setHideGroupFour] = groups.gFour;
  let yellowBGState = 'On';
  
  if (colorNumber == 2) {
    yellowBGState = 'Off';
  };

  function handleYellowBG () {
    setImgBGColor(2);
  };

  return (
    <button class={`yellowBG${yellowBGState} hide${hideGroupFour}`} onClick={handleYellowBG}></button>
  );
};

export default YellowBG;