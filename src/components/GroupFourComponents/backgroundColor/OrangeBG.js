import React, {useContext} from "react";
import {Context} from "./../../../Context.js";

function OrangeBG () {
  const {colors, quote, auto, groups, refs} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const [hideGroupFour, setHideGroupFour] = groups.gFour;
  let orangeBGState = 'On';

  if (colorNumber == 1) {
    orangeBGState = 'Off';
  };

  function handleOrangeBG () {
    setImgBGColor(1);
  };

  return (
    <button class={`redBG${orangeBGState} hide${hideGroupFour}`} onClick={handleOrangeBG}></button>
  );
};

export default OrangeBG;