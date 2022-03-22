import React, {useContext} from "react";
import {Context} from "./../../../Context.js";

function IndigoTxt () {
  const {colors} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  let indigoTxtState = '';
  
  if (imgBGColor === 5) {
    indigoTxtState = 'buttonDisabled';
  };
  if (colorNumber === 5) {
    indigoTxtState = `buttonEnabled text-color${imgBGColor}`;
  };

  function handleIndigoTxt () {
    setColorNumber(5);
  };

  return (
    <button className={`Btn BG-color5 ${indigoTxtState}`} onClick={handleIndigoTxt}></button>
  );
};

export default IndigoTxt;