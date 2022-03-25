import React, {useContext} from 'react';
import {Context} from '../../../Context.js';
import WallAcceptBtn from './WallAcceptBtn.js';

function WallMessages () {
  const {refs} = useContext(Context);
  const [messagesArray, setMessagesArray] = refs.msg;

  return (
    <div>
      {messagesArray.map((msg, i) => (
        <p className={`shareIt`} key={i} >{msg}</p>
      ))}
      <WallAcceptBtn />
    </div>    
  );
};

export default WallMessages;