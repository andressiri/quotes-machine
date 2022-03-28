import React, {useContext, useState} from 'react';
import {Context} from '../../../Context.js';
import useRedirectTo from '../../../functions/useRedirectTo.js';
import validateEmail from '../../../functions/validateEmail.js';

function LoginButton () {
  const {colors, refs, forms} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const [message, setMessage] = refs.msg;
  const [loggedIn, setLoggedIn] = refs.logged;
  const [verified, setVerified] = refs.ver;
  const [emailValue, setEmailValue] = forms.email;
  const [passwordValue, setPasswordValue] = forms.pass;
  const [isLoading, setIsLoading] = useState(false); 
  const redirectTo = useRedirectTo();

  async function handleSubmitLogin(event) {
    event.preventDefault();
    if (isLoading) return;
    if (emailValue === '' || passwordValue === '') {
      setMessage('Please fill all fields');
    } else if (!validateEmail(emailValue)) {
      setMessage('Please enter a valid email');
    } else {
      setIsLoading(true);
      const passportAuth = await fetch('/users/loginAuth', {
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
      const response = await fetch('/users/login', {method: 'POST'});
      let json = await response.json();    
      if (json.message === 'Login success') {
        setIsLoading(false);
        setLoggedIn(true);
        setVerified(json.verified);        
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
          redirectTo('/box/verifyEmail');
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
      onClick={handleSubmitLogin} >
      Login
    </button>
  );
};

export default LoginButton;