import React, {useContext, useState} from 'react';
import {Context} from '../../../Context.js';
import useRedirectTo from '../../../functions/useRedirectTo.js';

function ChangeNameBtn () {
  const {colors, refs, forms} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const [message, setMessage] = refs.msg;
  const auxRef = refs.aux;
  const [nameValue, setNameValue] = forms.name;
  const [isLoading, setIsLoading] = useState(false);
  const redirectTo = useRedirectTo();

  const handleChangeNameBtn = async (event) => {
    event.preventDefault();
    if (isLoading) return;
    if (nameValue === '') return setMessage('Please enter a new name');
    setIsLoading(true); 
    const response = await fetch('/users/changeName', {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'},
      body: JSON.stringify({
        name: nameValue
      }),
    });
    let json = await response.json();
    setIsLoading(false);
    if (json.success) {
      auxRef.current = '';
      setTimeout(() => {  // Timeout to handle transition
        setMessage(`Name changed to ${nameValue}`);
      }, 250);
      redirectTo('/box/message');
    } else {
      setMessage(json.message);
    };
  };

  return (
    <button
      className={`NQbtn BG-color${colorNumber} text-color${imgBGColor}`}
      onClick={handleChangeNameBtn}
    > Confirm</button>
  );
};

export default ChangeNameBtn;