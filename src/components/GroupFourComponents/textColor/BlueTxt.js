import React, {useContext} from "react";
import {Context} from "./../../../Context.js";
import './../../../styles/colorButtons.scss';

function BlueTxt () {
  const {colors, quote, auto, groups, refs} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const [hideGroupFour, setHideGroupFour] = groups.gFour;
  let blueTxtState = 'On';
  
  if (imgBGColor == 4) {
    blueTxtState = 'Off';
  };

  function handleBlueTxt () {
    setColorNumber(4);
  };

  return (
    <button class={`blueBG${blueTxtState} hide${hideGroupFour}`} onClick={handleBlueTxt}></button>
  );
};

export default BlueTxt;