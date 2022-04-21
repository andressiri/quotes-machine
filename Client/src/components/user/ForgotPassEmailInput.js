import React, {useContext} from 'react';
import {Context} from '../../Context.js';

function EmailInput () {
  const {colors, forms} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const [emailValue, setEmailValue] = forms.email;

  return (
    <input
      type='email'
      placeholder='Email...'
      className={`codeInput inputs BG-color${imgBGColor} text-color${colorNumber}`}
      onChange={(event) => setEmailValue(event.target.value)}
    />
  );
};

export default EmailInput;