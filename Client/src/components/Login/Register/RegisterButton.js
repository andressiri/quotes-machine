import React, {useContext} from 'react';
import {Context} from '../../../Context.js';
import useRedirectTo from '../../../functions/useRedirectTo.js';
import validateEmail from '../../../functions/validateEmail.js';

function RegisterButton () {
  const {colors, refs, forms} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const [messagesArray, setMessagesArray] = refs.msg;
  const [nameValue, setNameValue] = forms.name;
  const [emailValue, setEmailValue] = forms.email;
  const [passwordValue, setPasswordValue] = forms.pass;
  const [password2Value, setPassword2Value] = forms.pass2;
  const redirectTo = useRedirectTo();

  async function handleSubmitRegister(event) {
    event.preventDefault();
    const auxArray = [];    
    //Check required fields
    if (nameValue === '' || emailValue === '' || passwordValue === '' || password2Value === '') {
      auxArray.push('Please fill in all fields');
    };
    //Check valid email
    if (emailValue !== '' && !validateEmail(emailValue)) {
      auxArray.push('Please enter a valid email');    
    };
    //Check passwords match
    if (passwordValue !== '' && passwordValue !== password2Value) {
      auxArray.push('Passwords do not match');
    };
    //Check password length
    if (passwordValue !== '' && passwordValue.length < 6) {
      auxArray.push('Password should be at least 6 characters');
    };
    // POST the form if it meets requirements
    if (auxArray.length === 0) {
      const response = await fetch('/users/register', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',},
        body: JSON.stringify({
          name: nameValue,
          email: emailValue,
          password: passwordValue,
        }),
      });
      let json = await response.json();
      auxArray.push(json.message);
      // Check if mail was available
      if (json.message === `${nameValue} was registered successfully`) redirectTo('/login');
    };
    setMessagesArray(auxArray);
  };

  return (
    <button
      className={`NQbtn BG-color${colorNumber} text-color${imgBGColor}`}
      onClick={handleSubmitRegister}
    >Register
    </button>
  );
};

export default RegisterButton;