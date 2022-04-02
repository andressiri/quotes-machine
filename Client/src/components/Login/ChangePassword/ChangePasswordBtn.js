import React, {useContext, useState} from 'react';
import {Context} from '../../../Context.js';
import useLogout from '../../../functions/userFunctions/useLogout.js';

function ChangePasswordBtn () {
  const {colors, refs, forms} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const [message, setMessage] = refs.msg;
  const emailReference = refs.email;
  const [passwordValue, setPasswordValue] = forms.pass;
  const [password2Value, setPassword2Value] = forms.pass2;
  const [isLoading, setIsLoading] = useState(false);
  const logout = useLogout();

  const handleSubmitNewPassword = async (event) => {
    event.preventDefault();
    if (isLoading) return;
        //Check required fields
    if (passwordValue === '' || password2Value === '') {
      return setMessage('Please fill in all fields');
    };  //Check passwords match
    if (passwordValue !== '' && passwordValue !== password2Value) {
      return setMessage('Passwords do not match');
    };  //Check password length
    if (passwordValue !== '' && passwordValue.length < 6) {
      return setMessage('Password should be at least 6 characters');
    };  //Send the form if it meets requirements
    setIsLoading(true);
    const response = await fetch('/users/changePassword', {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: emailReference.current,
        password: passwordValue
      }),
    });
    let json = await response.json();
    setIsLoading(false);
    if (json.message === 'Password changed') {
      emailReference.current = '';
      setTimeout(() => {  // Timeout to handle transition
        setMessage(json.message);
      }, 250);
      logout();
    } else {
      setMessage(json.message);
    };
  };

  return (
    <button
      className={`NQbtn BG-color${colorNumber} text-color${imgBGColor}`}
      onClick={handleSubmitNewPassword}
    >Confirm</button>
  );
};

export default ChangePasswordBtn;