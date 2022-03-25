import React, {useContext} from 'react';
import {Context} from '../../../Context.js';
import AcceptBtn from './AcceptBtn.js';

function BoxMessages () {
  const {refs} = useContext(Context);
  const [messagesArray, setMessagesArray] = refs.msg;

  return (
    <div>
      {messagesArray.map((msg, i) => (
        <p className={`shareIt`} key={i} >{msg}</p>
      ))}
      <AcceptBtn />
    </div>    
  );
};

export default BoxMessages;