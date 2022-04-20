import React, {useContext} from 'react';
import {Context} from '../../../Context.js';
import useRedirectTo from '../../../functions/useRedirectTo.js';
import Message from '../../Message.js';
import EmailInput from '../EmailInput.js';
import PasswordInput from '../PasswordInput.js';
import LoginButton from './LoginButton.js';

function LoginForm() {
  const {colors, refs} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const [message, setMessage] = refs.msg;
  const redirectTo = useRedirectTo();
  
  const handleForgotPassword = () => {
    setTimeout(() => {  // Timeout to handle transition
      setMessage('');
    }, 250);
    redirectTo('/box/password/forgot');
  };

  const handleRegister = () => {
    setTimeout(() => {  // Timeout to handle transition
      setMessage('');
    }, 250);
    redirectTo('/box/register');
  };

  return (
    <div className={'routeColumnContainer'}>
      <Message parentToChild={{
        defaultMessage: '',
        waitMessage: '',
        config: {
          colorNum: colorNumber,
          imgBG: imgBGColor
        }
      }} />
      <form id='loginForm'>
        <EmailInput parentToChild={{config: {colorNum: colorNumber, imgBG: imgBGColor}}}/>
        <PasswordInput />
        <LoginButton />
      </form>
      <div className={'flexDiv spaceEvenly'}>
        <h4 className={'pointer containerText'} onClick={handleForgotPassword}>Forgot password?</h4>
        <h3 className={'pointer containerText'} onClick={handleRegister} style={{textDecoration: 'underline'}}>Register</h3>
      </div>
    </div>
  );
}

export default LoginForm;