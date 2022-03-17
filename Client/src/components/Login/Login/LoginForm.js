import React, {useContext} from 'react';
import {Context} from '../../../Context.js';
import useRedirectTo from '../../../functions/useRedirectTo.js';
import EmailInput from '../EmailInput.js';
import PasswordInput from '../PasswordInput.js';
import LoginButton from './LoginButton.js';

function LoginForm() {
  const {refs} = useContext(Context);
  const [messagesArray, setMessagesArray] = refs.msg;
  const redirectTo = useRedirectTo();
  
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
        <EmailInput />
        <PasswordInput />
        <LoginButton />
      </form>
      <h2 className={`shareIt`} onClick={handleForgotPassword}>Forgot password</h2>
      <h2 className={`shareIt`} onClick={handleRegister}>Register</h2>
    </div>
  );
}

export default LoginForm;
