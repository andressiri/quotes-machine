import React, {useContext} from 'react';
import {Context} from '../../../Context.js';
import useRedirectTo from '../../../functions/useRedirectTo.js';
import EmailInput from '../EmailInput.js';
import NameInput from '../NameInput.js';
import PasswordInput from '../PasswordInput.js';
import Password2Input from '../Password2Input.js';
import RegisterButton from './RegisterButton.js';

function RegisterForm() {
  const {refs} = useContext(Context);
  const [message, setMessage] = refs.msg;
  const redirectTo = useRedirectTo();

  function handleGoToLogin() {
    setTimeout(() => {  // Timeout to handle transition
      setMessage('');         
    }, 250);
    redirectTo('/box/login');
  };

  return (
    <div>
      <p className={`shareIt`} >Fill all fields to create an account</p>
      {message !== '' && <p className={`shareIt`} >{message}</p>}
      <form id='registerForm'>
        <NameInput />
        <EmailInput />
        <PasswordInput />
        <Password2Input />
        <RegisterButton />
      </form>
      <h2 className={`shareIt`} onClick={handleGoToLogin}>Go to login</h2>
    </div>
  );
};

export default RegisterForm;
