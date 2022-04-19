import React, {useContext} from 'react';
import {Context} from '../../../Context.js';

function AuthorInput () {
  const {colors, quote, refs, forms} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const [author, setAuthor] = quote.auth;
  const [message, setMessage] = refs.msg;
  const [customAuthorValue, setCustomAuthorValue] = forms.customA;

  const handleOnChange = (event) => {
    if (event.target.value.length <= event.target.attributes.maxLength.value) {
      setCustomAuthorValue(event.target.value); 
      setAuthor(event.target.value);
      if (event.target.value.length < event.target.attributes.maxLength.value) return;
    };
    setMessage(`Max of ${event.target.attributes.maxLength.value} characters allowed for author`);
    return false;
  };

  return (
    <input
      type='text'
      maxLength={'30'}
      placeholder='Author...'
      className={`formBtn inputs BG-color${imgBGColor} text-color${colorNumber}`}
      onChange={handleOnChange}
    />
  );
};

export default AuthorInput;