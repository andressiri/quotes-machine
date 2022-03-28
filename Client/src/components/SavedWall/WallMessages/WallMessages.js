import React, {useContext} from 'react';
import {Context} from '../../../Context.js';
import WallAcceptBtn from './WallAcceptBtn.js';

function WallMessages () {
  const {refs} = useContext(Context);
  const [message, setMessage] = refs.msg;

  return (
    <div>
      {message !== '' && <p className={`shareIt`} >{message}</p>}
      <WallAcceptBtn />
    </div>    
  );
};

export default WallMessages;