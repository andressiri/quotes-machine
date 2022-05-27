import React, {useContext} from 'react';
import {Context} from '../../Context.js';

function Password2Input () {
  const {colors, forms} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const [password2Value, setPassword2Value] = forms.pass2;

  return (
    <input
      type='password'
      placeholder='Password...'
      className={`formBtn inputs BG-color${imgBGColor} text-color${colorNumber}`}
      onChange={(event) => setPassword2Value(event.target.value)}
    />
  );
};

export default Password2Input;