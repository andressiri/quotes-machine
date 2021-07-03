import React, {useContext} from "react";
import {Context} from "./../../../Context.js";

function GreenBG () {
  const {colors, quote, auto, groups, refs} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const [hideGroupFour, setHideGroupFour] = groups.gFour;
  let greenBGState = 'On';

  if (colorNumber == 3) {
    greenBGState = 'Off';
  };

  function handleGreenBG () {
    setImgBGColor(3);
  };

  return (
    <button class={`greenBG${greenBGState} hide${hideGroupFour}`} onClick={handleGreenBG}></button>
  );
};

export default GreenBG;