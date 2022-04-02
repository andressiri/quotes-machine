import React, {useContext} from 'react';
import {Context} from '../../Context.js';
import ShareImageBtn from './ShareImageBtn.js';
import ShareTextBtn from './ShareTextBtn.js';
import EditAndShareImgBtn from './EditAndShareImgBtn.js';
import EmailInput from '../Login/EmailInput.js';

function SharingChoices ({parentToChild}) {
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
      <EditAndShareImgBtn parentToChild={parentToChild} />
    </div>
  );
};

export default SharingChoices;