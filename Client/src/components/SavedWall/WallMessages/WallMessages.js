import React, {useContext} from 'react';
import {Context} from '../../../Context.js';
import WallAcceptBtn from './WallAcceptBtn.js';

function WallMessages ({parentToChild}) {
  const {refs} = useContext(Context);
  const [message, setMessage] = refs.msg;

  return (
    <div className={`BG-color${parentToChild.config.imgBG} text-color${parentToChild.config.colorNum}`}>
      {message !== '' && <p className={`shareIt`} >{message}</p>}
      <WallAcceptBtn parentToChild={parentToChild} />
    </div>    
  );
};

export default WallMessages;