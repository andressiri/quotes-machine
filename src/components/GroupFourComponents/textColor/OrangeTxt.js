import React, {useContext} from "react";
import {Context} from "./../../../Context.js";
import './../../../styles/colorButtons.scss';

function OrangeTxt () {
  const {colors, quote, auto, groups, refs} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const [hideGroupFour, setHideGroupFour] = groups.gFour;
  let orangeTxtState = 'On';
  
  if (imgBGColor == 1) {
    orangeTxtState = 'Off';
  };

  function handleOrangeTxt () {
    setColorNumber(1);
  };

  return (
    <button class={`redBG${orangeTxtState} hide${hideGroupFour}`} onClick={handleOrangeTxt}></button>
  );
};

export default OrangeTxt;