import React, {useContext} from "react";
import {Context} from "../../../Context.js";

function RedBG () {
  const {colors, quote, auto, groups, refs} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const [hideGroupFour, setHideGroupFour] = groups.gFour;
  let redBGState = 'On';

  if (colorNumber == 0) {
    redBGState = 'Off';
  };

  function handleRedBG () {
    setImgBGColor(0);
  };

  return (
    <button class={`redBG${redBGState} hide${hideGroupFour}`} onClick={handleRedBG}></button>
  );
};

export default RedBG;