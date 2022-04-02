import React, {useContext} from 'react';
import {Context} from '../../../Context.js';
import useRedirectTo from '../../../functions/useRedirectTo.js';
import PasswordInput from '../PasswordInput.js';
import Password2Input from '../Password2Input.js';
import ChangePasswordBtn from './ChangePasswordBtn.js';

function ChangePassword() {
  const {refs} = useContext(Context);
  const [message, setMessage] = refs.msg;
  const [loggedIn, setLoggedIn] = refs.logged;
  const emailReference = refs.email;
  const redirectTo = useRedirectTo();

  let redirectPath = '/box/login';
  let auxString = 'Go to login';
  if (loggedIn) {
    redirectPath = '/box/loggedIn';
    auxString = 'Go back';
  };

  const handleGoBack = () => {
    emailReference.current = '';
    setTimeout(() => {  // Timeout to handle transition
      setMessage('');
    }, 250);
    redirectTo(redirectPath);
  };

  return (
    <div>
      <p className={`shareIt`} >Create your new password</p>
      {message !== '' && <p className={`shareIt`} >{message}</p>}
      <form id='changePasswordForm'>
        <PasswordInput />
        <Password2Input />
        <ChangePasswordBtn />
      </form>
      <h2 className={`shareIt`} onClick={handleGoBack}>{auxString}</h2>
    </div>
  );
};

export default ChangePassword;