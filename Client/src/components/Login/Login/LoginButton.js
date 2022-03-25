import React, {useContext, useState} from 'react';
import {Context} from '../../../Context.js';
import useRedirectTo from '../../../functions/useRedirectTo.js';
import validateEmail from '../../../functions/validateEmail.js';

function LoginButton () {
  const {colors, refs, forms} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const [messagesArray, setMessagesArray] = refs.msg;
  const [loggedIn, setLoggedIn] = refs.logged;
  const [verified, setVerified] = refs.ver;
  const [emailValue, setEmailValue] = forms.email;
  const [passwordValue, setPasswordValue] = forms.pass;
  const [isLoading, setIsLoading] = useState(false); 
  const redirectTo = useRedirectTo();

  async function handleSubmitLogin(event) {
    event.preventDefault();
    if (isLoading) return;  
    setIsLoading(true);
    let auxBool = true; //State won't update for final check, so isLoading can't be used in the conditional. Without that conditional isLoading would be updated after redirect leading to the error: "Can't perform a React state update on an unmounted component"
    const msgArray = [];
    if (emailValue === '' || passwordValue === '') {
      msgArray.push('Please fill all fields');
    } else if (!validateEmail(emailValue)) {
      msgArray.push('Please enter a valid email');
    } else {
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
        auxBool = false;
        setLoggedIn(true);
        setVerified(json.verified);        
        // can't use checkVerified because state won't update before the conditional check
        if (json.verified) {          
          redirectTo('/box/loggedIn');
        } else {
          redirectTo('/box/verifyEmail');
        };
      } else {
        msgArray.push(json.message);
      };  
    };
    if (auxBool) setIsLoading(false);  //final check
    setMessagesArray(msgArray);
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