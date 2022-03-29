import React, {useContext, useEffect} from 'react';
import {Context} from '../../../Context.js';
import DeletedOkBtn from './DeletedOkBtn.js';

function QuoteDeleted ({parentToChild}) {
  const {refs} = useContext(Context);
  const [message, setMessage] = refs.msg;
  const {config} = parentToChild;

  return (
    <div className={`BG-color${config.imgBG} text-color${config.colorNum}`}>
      {message !== ''
        &&  <p className={`shareIt`}
              >{message}</p>}
      <DeletedOkBtn parentToChild={parentToChild} />
    </div>    
  );
};

export default QuoteDeleted;