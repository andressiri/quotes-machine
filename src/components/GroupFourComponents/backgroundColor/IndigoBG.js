import React, {useContext} from "react";
import {Context} from "./../../../Context.js";
import './../../../styles/colorButtons.scss';

function IndigoBG () {
  const {colors, quote, auto, groups, refs} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const [hideGroupFour, setHideGroupFour] = groups.gFour;
  let indigoBGState = 'On';
  
  if (colorNumber == 5) {
    indigoBGState = 'Off';
  };

  function handleIndigoBG () {
    setImgBGColor(5);
  };

  return (
    <button class={`indigoBG${indigoBGState} hide${hideGroupFour}`} onClick={handleIndigoBG}></button>
  );
};

export default IndigoBG;