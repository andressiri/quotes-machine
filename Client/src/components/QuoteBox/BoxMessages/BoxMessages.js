import React, {useContext} from 'react';
import {Context} from '../../../Context.js';
import BoxAcceptBtn from './BoxAcceptBtn.js';

function BoxMessages () {
  const {refs} = useContext(Context);
  const [messagesArray, setMessagesArray] = refs.msg;

  return (
    <div>
      {messagesArray.map((msg, i) => (
        <p className={`shareIt`} key={i} >{msg}</p>
      ))}
      <BoxAcceptBtn />
    </div>    
  );
};

export default BoxMessages;