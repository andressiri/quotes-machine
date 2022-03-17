import React, {useContext} from 'react';
import {Context} from '../../Context.js';

function PasswordInput () {
  const {colors, forms} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const [passwordValue, setPasswordValue] = forms.pass;

  return (
    <input
      type="password"
      placeholder="Password..."
      className={`NQbtn BG-color${colorNumber} text-color${imgBGColor}`}
      onChange={(event) => setPasswordValue(event.target.value)}
    />
  );
};

export default PasswordInput;