import React, {useContext} from 'react';
import {Context} from '../../../Context.js';
import ShareImageBtn from '../../sharingChoices/ShareImageBtn.js';
import ShareTextBtn from '../../sharingChoices/ShareTextBtn.js';
import WallSharingCancelBtn from './WallSharingCancelBtn.js';
import EmailInput from '../../login/EmailInput.js';

function WallShareChoice ({parentToChild}) {
  const {refs} = useContext(Context);
  const shareChosen = refs.sChosen;
  const [message, setMessage] = refs.msg;

  return (
    <div>
      {shareChosen.current === 'Email'
        &&
        <div>
          {message !== '' && <p className={`shareIt`} >{message}</p>}
          <label>Send To:
            <EmailInput />
          </label>
        </div>}
      <ShareTextBtn parentToChild={parentToChild} />
      <ShareImageBtn parentToChild={parentToChild} />
      <WallSharingCancelBtn parentToChild={parentToChild} />
    </div>
  );
};

export default WallShareChoice;