import React, {useContext} from 'react';
import {Context} from '../../Context.js';

function CodeInput () {
  const {colors, forms} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const [codeValue, setCodeValue] = forms.code;

  return (
    <input
      type='text'
      placeholder='Enter code here...'
      className={`NQbtn BG-color${colorNumber} text-color${imgBGColor}`}
      onChange={(event) => setCodeValue(event.target.value)}
    />
  );
};

export default CodeInput;