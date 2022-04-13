import React, {useContext, useState} from 'react';
import {Context} from '../../../Context.js';
import useRedirectTo from '../../../functions/useRedirectTo.js';
import validateEmail from '../../../functions/validateEmail.js';

function LoginButton () {
  const {colors, refs, edit, forms, force} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const [autoColorChange, setAutoColorChange] = colors.auto;
  const [message, setMessage] = refs.msg;
  const [loggedIn, setLoggedIn] = refs.logged;
  const [verified, setVerified] = refs.ver;
  const [restartDefaultObj, setRestartDefaultObj] = edit.auto;
  const [configBackup, setConfigBackup] = edit.cBackup;
  const [emailValue, setEmailValue] = forms.email;
  const [passwordValue, setPasswordValue] = forms.pass;
  const [isLoading, setIsLoading] = useState(false);
  const redirectTo = useRedirectTo();

  const handleSubmitLogin = async (event) => {
    event.preventDefault();
    if (isLoading) return;
    if (emailValue === '' || passwordValue === '') {
      setMessage('Please fill all fields');
    } else if (!validateEmail(emailValue)) {
      setMessage('Please enter a valid email');
    } else {
      setIsLoading(true);
      const passportAuth = await fetch('/users/login/authentication', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: emailValue,
          password: passwordValue,
        }),
      });
      const response = await fetch('/users/login/response', {method: 'POST'});
      const json = await response.json();
      if (response.status === 200) {
        //Load options
        if (json.userOptions.message === 'User options loaded') {
          const {userOptionsObj} = json.userOptions;
          setConfigBackup(userOptionsObj.quoteConfig);
          setRestartDefaultObj(userOptionsObj.restartAfterShare);
          setAutoColorChange(userOptionsObj.automaticColor);
        };
        setLoggedIn(true);
        setVerified(json.verified);
        setIsLoading(false);
        // can't use checkVerified because state won't update before the conditional check
        if (json.verified) {
          setTimeout(() => {  // Timeout to handle transition
            setMessage(json.message);
          }, 250); 
          redirectTo('/box/message');
        } else {
          setTimeout(() => {  // Timeout to handle transition
            setMessage('');
          }, 250);
          redirectTo('/box/email/verification');
        };
      } else {
        setIsLoading(false);
        setMessage(json.message);
      };
    };
  };

  return (
    <button
      className={`NQbtn BG-color${colorNumber} text-color${imgBGColor}`}
      onClick={handleSubmitLogin}
    >Login</button>
  );
};

export default LoginButton;