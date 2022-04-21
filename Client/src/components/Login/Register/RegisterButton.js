import React, {useContext, useState} from 'react';
import {Context} from '../../../Context.js';
import useRedirectTo from '../../../functions/useRedirectTo.js';
import useCreateOptionsObj from '../../../functions/useCreateOptionsObj.js';
import validateEmail from '../../../functions/validateEmail.js';

function RegisterButton () {
  const {colors, refs, edit, forms} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const [message, setMessage] = refs.msg;
  const [configBackup, setConfigBackup] = edit.cBackup;
  const [nameValue, setNameValue] = forms.name;
  const [emailValue, setEmailValue] = forms.email;
  const [passwordValue, setPasswordValue] = forms.pass;
  const [password2Value, setPassword2Value] = forms.pass2;
  const [isLoading, setIsLoading] = useState(false); 
  const redirectTo = useRedirectTo();
  const createOptionsObj = useCreateOptionsObj();

  const handleSubmitRegister = async (event) => {
    event.preventDefault();
    if (isLoading) return;
        //Check required fields
    if (nameValue === '' || emailValue === '' || passwordValue === '' || password2Value === '') {
      return setMessage('Please fill all fields');
    };  //Check valid email
    if (emailValue !== '' && !validateEmail(emailValue)) {
      return setMessage('Please enter a valid email');
    };  //Check passwords match
    if (passwordValue !== '' && passwordValue !== password2Value) {
      return setMessage('Passwords do not match');
    };  //Check password length
    if (passwordValue !== '' && passwordValue.length < 6) {
      return setMessage('Password should be at least 6 characters');
    };  // POST the form if it meets requirements
    setIsLoading(true);
    const userOpt = createOptionsObj(configBackup);
    const response = await fetch('/api/users/register', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',},
      body: JSON.stringify({
        name: nameValue,
        email: emailValue,
        password: passwordValue,
        userOptions: userOpt
      }),
    });
    const json = await response.json();
    setMessage(json.message);
    setIsLoading(false);
    // Check if mail was available and registration was successfull
    if (response.status === 201) redirectTo('/box/login');
  };

  return (
    <button
      className={`formBtn BG-color${colorNumber} text-color${imgBGColor}`}
      onClick={handleSubmitRegister}
    >{isLoading === true ? 'Creating account...' : 'Register'}</button>
  );
};

export default RegisterButton;