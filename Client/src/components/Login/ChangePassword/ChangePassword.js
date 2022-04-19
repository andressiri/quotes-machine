import React, {useContext} from 'react';
import {Context} from '../../../Context.js';
import Message from '../../Message.js';
import PasswordInput from '../PasswordInput.js';
import Password2Input from '../Password2Input.js';
import ChangePasswordBtn from './ChangePasswordBtn.js';
import useRedirectTo from '../../../functions/useRedirectTo.js';

function ChangePassword() {
  const {refs} = useContext(Context);
  const [message, setMessage] = refs.msg;
  const [loggedIn, setLoggedIn] = refs.logged;
  const emailReference = refs.email;
  const redirectTo = useRedirectTo();

  let redirectPath = '/box/login';
  let auxString = 'Go to login';
  if (loggedIn) {
    redirectPath = '/box/logged-in';
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
    <div className={'routeColumnContainer'}>
      <Message parentToChild={{defaultMessage: 'Create your new password', waitMessage: ''}} />
      <form id='changePasswordForm'>
        <PasswordInput />
        <Password2Input />
        <ChangePasswordBtn />
      </form>
      <h3 className={'pointer containerText'} onClick={handleGoBack}>{auxString}</h3>
    </div>
  );
};

export default ChangePassword;