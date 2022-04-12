import React, {useContext} from 'react';
import {Context} from '../../../Context.js';
import useRedirectTo from '../../../functions/useRedirectTo.js';
import EmailInput from '../EmailInput.js';
import PasswordInput from '../PasswordInput.js';
import LoginButton from './LoginButton.js';

function LoginForm() {
  const {refs} = useContext(Context);
  const [message, setMessage] = refs.msg;
  const redirectTo = useRedirectTo();
  
  const handleForgotPassword = () => {
    setTimeout(() => {  // Timeout to handle transition
      setMessage('');
    }, 250);
    redirectTo('/box/forgotPassword');
  };

  const handleRegister = () => {
    setTimeout(() => {  // Timeout to handle transition
      setMessage('');
    }, 250);
    redirectTo('/box/register');
  };

  return (
    <div>
      {message !== '' && <p className={`shareIt`} >{message}</p>}
      <form id='loginForm'>
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