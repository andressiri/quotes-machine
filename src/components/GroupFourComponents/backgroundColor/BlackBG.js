import React, {useContext} from "react";
import {Context} from "./../../../Context.js";
import './../../../styles/colorButtons.scss';

function BlackBG () {
  const {colors, quote, auto, groups, refs} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const [hideGroupFour, setHideGroupFour] = groups.gFour;
  let blackBGState = 'On';

  if (colorNumber == 7) {
    blackBGState = 'Off';
  }; 

  function handleBlackBG () {
    setImgBGColor(7);
  };

  return (
    <button class={`blackBG${blackBGState} hide${hideGroupFour}`} onClick={handleBlackBG}></button>
  );
};

export default BlackBG;