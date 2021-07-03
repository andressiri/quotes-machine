import React, {useContext} from "react";
import {Context} from "./../../../Context.js";
import './../../../styles/colorButtons.scss';

function WhiteBG () {
  const {colors, quote, auto, groups, refs} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const [hideGroupFour, setHideGroupFour] = groups.gFour;
  let whiteBGState = 'On';

  if (colorNumber == 8) {
    whiteBGState = 'Off';
  };

  function handleWhiteBG () {
    setImgBGColor(8);
  };

  return (
    <button class={`whiteBG${whiteBGState} hide${hideGroupFour}`} onClick={handleWhiteBG}></button>
  );
};

export default WhiteBG;