import React, {useContext} from "react";
import {Context} from "./../../../Context.js";

function BlueBG () {
  const {colors} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  let blueBGState= '';

  if (colorNumber === 4) {
    blueBGState = 'buttonDisabled';
  };
  if (imgBGColor === 4) {
    blueBGState = `buttonEnabled text-color${colorNumber}`;
  };

  function handleBlueBG () {
    setImgBGColor(4);
  };

  return (
    <button className={`editBtn BG-color4 ${blueBGState}`} onClick={handleBlueBG}></button>
  );
};

export default BlueBG;