import React, {useContext} from 'react';
import {Context} from '../../Context.js';

function NameInput () {
  const {colors, forms} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const [nameValue, setNameValue] = forms.name;

  return (
    <input
      type='text'
      placeholder='Name...'
      className={`NQbtn BG-color${colorNumber} text-color${imgBGColor}`}
      onChange={(event) => setNameValue(event.target.value)}
    />
  );
};

export default NameInput;