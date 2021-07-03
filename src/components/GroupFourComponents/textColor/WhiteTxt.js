import React, {useContext} from "react";
import {Context} from "./../../../Context.js";

function WhiteTxt () {
  const {colors, quote, auto, groups, refs} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const [hideGroupFour, setHideGroupFour] = groups.gFour;
  let whiteTxtState = 'On';
  
  if (imgBGColor == 8) {
    whiteTxtState = 'Off';
  };

  function handleWhiteTxt () {
    setColorNumber(8);
  };

  return (
    <button class={`whiteBG${whiteTxtState} hide${hideGroupFour}`} onClick={handleWhiteTxt}></button>
  );
};

export default WhiteTxt;