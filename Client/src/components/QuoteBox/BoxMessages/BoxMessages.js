import React, {useContext} from 'react';
import {Context} from '../../../Context.js';
import BoxAcceptBtn from './BoxAcceptBtn.js';

function BoxMessages () {
  const {refs} = useContext(Context);
  const [message, setMessage] = refs.msg;

  return (
    <div>
      {message !== '' && <p className={`shareIt`} >{message}</p>}
      <BoxAcceptBtn />
    </div>    
  );
};

export default BoxMessages;