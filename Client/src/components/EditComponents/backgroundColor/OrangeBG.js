import React, {useContext} from "react";
import {Context} from "./../../../Context.js";

function OrangeBG () {
  const {colors} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  let orangeBGState = '';

  if (colorNumber === 1) {
    orangeBGState = 'buttonDisabled';
  };
  if (imgBGColor === 1) {
    orangeBGState = `buttonEnabled text-color${colorNumber}`;
  };

  function handleOrangeBG () {
    setImgBGColor(1);
  };

  return (
    <button className={`customBtn BG-color1 ${orangeBGState}`} onClick={handleOrangeBG}></button>
  );
};

export default OrangeBG;