import React, {useContext} from 'react';
import {Context} from '../../../Context.js';
import BoxAcceptBtn from './BoxAcceptBtn.js';

function BoxMessages () {
  const {refs} = useContext(Context);
  const [message, setMessage] = refs.msg;

  return (
    <div className={'messageContainer'}>
      {message !== '' && <h2>{message}</h2>}
      <BoxAcceptBtn />
    </div>
  );
};

export default BoxMessages;