import React, {useContext} from "react";
import {Context} from "./../../../Context.js";
import './../../../styles/colorButtons.scss';

function BlueBG () {
  const {colors, quote, auto, groups, refs} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const [hideGroupFour, setHideGroupFour] = groups.gFour;
  let blueBGState= 'On';

  if (colorNumber == 4) {
    blueBGState = 'Off';
  };

  function handleBlueBG () {
    setImgBGColor(4);
  };

  return (
    <button class={`blueBG${blueBGState} hide${hideGroupFour}`} onClick={handleBlueBG}></button>
  );
};

export default BlueBG;