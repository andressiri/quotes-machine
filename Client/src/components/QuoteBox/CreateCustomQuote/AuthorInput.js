import React, {useContext} from 'react';
import {Context} from '../../../Context.js';

function AuthorInput () {
  const {colors, quote, forms} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const [author, setAuthor] = quote.auth;
  const [customAuthorValue, setCustomAuthorValue] = forms.customA;

  return (
    <input
      type='text'
      placeholder='Author...'
      className={`NQbtn BG-color${colorNumber} text-color${imgBGColor}`}
      onChange={(event) => {setCustomAuthorValue(event.target.value); setAuthor(event.target.value);}}
    />
  );
};

export default AuthorInput;