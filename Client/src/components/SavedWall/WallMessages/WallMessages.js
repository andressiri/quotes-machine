import React, {useContext} from 'react';
import {Context} from '../../../Context.js';
import WallAcceptBtn from './WallAcceptBtn.js';

function WallMessages ({parentToChild}) {
  const {refs} = useContext(Context);
  const [message, setMessage] = refs.msg;
  const {config} = parentToChild;

  return (
    <div className={`BG-color${config.imgBG} text-color${config.colorNum}`}>
      {message !== '' && <p className={`shareIt`} >{message}</p>}
      <WallAcceptBtn parentToChild={parentToChild} />
    </div>
  );
};

export default WallMessages;