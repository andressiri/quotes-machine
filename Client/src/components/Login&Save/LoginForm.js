import React, { useContext, useState } from 'react';
import { Context } from '../../Context.js';
import useRedirectTo from '../../functions/useRedirectTo.js';
import validateEmail from '../../functions/validateEmail.js';

function LoginForm() {
  const { colors, refs } = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const [messagesArray, setMessagesArray] = refs.msg;
  const [loggedIn, setLoggedIn] = refs.logged;
  const [verified, setVerified] = refs.ver;
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const redirectTo = useRedirectTo();

  async function handleSubmit(event) {
    event.preventDefault();
    const auxArray = [];
    if (emailValue === '' || passwordValue === '') {
      auxArray.push('Please fill all fields');
    } else if (!validateEmail(emailValue)) {
      auxArray.push('Please enter a valid email');
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
        setLoggedIn(true);
        setVerified(json.verified);
        // can't use checkVerified because state won't update properly
        if (json.verified) {
          redirectTo('/loggedIn');
        } else {
          redirectTo('/verifyEmail');
        };
      } else {
        auxArray.push(json.message);
      };  
    };
    setMessagesArray(auxArray);
  };
  
  function handleForgotPassword() {
    setMessagesArray([]);
    redirectTo('/forgotPassword');
  };

  function handleRegister() {
    setMessagesArray([]);
    redirectTo('/register');
  };

  return (
    <div>      
      {messagesArray.map((msg, i) => (
        <p className={`shareIt`} key={i} >{msg}</p>
      ))}
      <form id="loginForm">
        <input
          type="email"
          placeholder="Email..."
          className={`NQbtn BG-color${colorNumber} text-color${imgBGColor}`}
          onChange={(event) => setEmailValue(event.target.value)}
        />
        <input
          type="password"
          placeholder="Password..."
          className={`NQbtn BG-color${colorNumber} text-color${imgBGColor}`}
          onChange={(event) => setPasswordValue(event.target.value)}
        />
        <button
          className={`NQbtn BG-color${colorNumber} text-color${imgBGColor}`}
          onClick={handleSubmit} >
          Login
        </button>
      </form>
      <h2 className={`shareIt`} onClick={handleForgotPassword}>
        Forgot password
      </h2>
      <h2 className={`shareIt`} onClick={handleRegister}>
        Register
      </h2>
    </div>
  );
}

export default LoginForm;
