import React, {useContext} from 'react';
import {Context} from '../../../../Context.js';
import Message from '../../../Message.js';
import ForgotPassEmailInput from '../../ForgotPassEmailInput.js';
import EmailForgotPasswordBtn from './EmailForgotPasswordBtn.js';
import CodeInput from '../../CodeInput.js';
import CheckCodeBtn from '../../CheckCodeBtn.js';
import useLogout from '../../../../functions/userFunctions/useLogout.js';

function ForgotPassword() {
  const {colors, refs, timers} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const emailReference = refs.email;
  const [checkCodeBtnTimer, setCheckCodeBtnTimer] = timers.check;
  const [sendEmailBtnTimer, setSendEmailBtnTimer] = timers.send;
  const [sendWaitMsg, setSendWaitMsg] = timers.sendWait;
  const [checkWaitMsg, setCheckWaitMsg] = timers.sendWait;
  const logout = useLogout();

  const handleGoToLogin = () => {
    emailReference.current = '';
    logout();
  };

  return (
    <div className={'routeColumnContainer'}>
      <Message parentToChild={{
        defaultMessage: 'Get the code from your email to verify your id',
        waitMessage: '',
        config: {
          colorNum: colorNumber,
          imgBG: imgBGColor
        }
      }} />
      {(sendEmailBtnTimer !== 0 && sendWaitMsg)
        && <Message parentToChild={{
            waitMessage: `You have to wait ${sendEmailBtnTimer}s to send email again`,
            defaultMessage: '',
            config: {
              colorNum: colorNumber,
              imgBG: imgBGColor
            }
          }} />
      }
      {(checkCodeBtnTimer !== 0 && checkWaitMsg)
        && <Message parentToChild={{
            waitMessage: `You have to wait ${checkCodeBtnTimer}s to check code again`,
            defaultMessage: '',
            config: {
              colorNum: colorNumber,
              imgBG: imgBGColor
            }
          }} />
      }
      <form id='forgorPassSendEmail'>
        <ForgotPassEmailInput />
        <EmailForgotPasswordBtn />
      </form>
      <form id='ForgotPassCodeForm'>
        <CodeInput />
        <CheckCodeBtn />
      </form>
      <h3 className={'pointer'} onClick={handleGoToLogin}>Go to login</h3>
    </div>
  );
}

export default ForgotPassword;