import React, {useContext, useEffect} from 'react';
import {Context} from '../../../Context.js';
import DeletedOkBtn from './DeletedOkBtn.js';

function QuoteDeleted ({parentToChild}) {
  const {refs} = useContext(Context);
  const [message, setMessage] = refs.msg;

  return (
    <div className={`BG-color${parentToChild.config.imgBG} text-color${parentToChild.config.colorNum}`}>
      {message !== '' && <p className={`shareIt`} >{message}</p>}
      <DeletedOkBtn parentToChild={parentToChild} />
    </div>    
  );
};

export default QuoteDeleted;