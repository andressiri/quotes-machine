import React, {useContext} from "react";
import {Context} from "./../../../Context.js";
import './../../../styles/colorButtons.scss';

function IndigoTxt () {
  const {colors, quote, auto, groups, refs} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const [hideGroupFour, setHideGroupFour] = groups.gFour;
  let indigoTxtState = 'On';
  
  if (imgBGColor == 5) {
    indigoTxtState = 'Off';
  };

  function handleIndigoTxt () {
    setColorNumber(5);
  };

  return (
    <button class={`indigoBG${indigoTxtState} hide${hideGroupFour}`} onClick={handleIndigoTxt}></button>
  );
};

export default IndigoTxt;