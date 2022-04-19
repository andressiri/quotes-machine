import React, {useContext} from 'react';
import {Context} from '../../../Context.js';
import Message from '../../Message.js';
import EmailInput from '../EmailInput.js';
import NameInput from '../NameInput.js';
import PasswordInput from '../PasswordInput.js';
import Password2Input from '../Password2Input.js';
import RegisterButton from './RegisterButton.js';
import useRedirectTo from '../../../functions/useRedirectTo.js';

function RegisterForm() {
  const {colors, refs} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const [message, setMessage] = refs.msg;
  const redirectTo = useRedirectTo();

  const handleGoToLogin = () => {
    setTimeout(() => {  // Timeout to handle transition
      setMessage('');
    }, 250);
    redirectTo('/box/login');
  };

  return (
    <div className={'routeColumnContainer'}>
      <Message parentToChild={{defaultMessage: 'Fill all fields to create an account', waitMessage: ''}}/>
      <form id='registerForm'>
        <NameInput />
        <EmailInput />
        <PasswordInput />
        <Password2Input />
        <RegisterButton />
      </form>
      <h3 className={'pointer'} onClick={handleGoToLogin}>Go to login</h3>
    </div>
  );
};

export default RegisterForm;