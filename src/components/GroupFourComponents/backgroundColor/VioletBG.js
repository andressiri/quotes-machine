import React, {useContext} from "react";
import {Context} from "./../../../Context.js";
import './../../../styles/colorButtons.scss';

function VioletBG () {
  const {colors, quote, auto, groups, refs} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const [hideGroupFour, setHideGroupFour] = groups.gFour;
  let violetBGState = 'On';

  if (colorNumber == 6) {
    violetBGState = 'Off';
  };

  function handleVioletBG () {
    setImgBGColor(6);
  };

  return (
    <button class={`violetBG${violetBGState} hide${hideGroupFour}`} onClick={handleVioletBG}></button>
  );
};

export default VioletBG;