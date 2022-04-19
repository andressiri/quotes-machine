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
      className={`codeInput inputs BG-color${imgBGColor} text-color${colorNumber}`}
      onChange={(event) => setCodeValue(event.target.value)}
    />
  );
};

export default CodeInput;