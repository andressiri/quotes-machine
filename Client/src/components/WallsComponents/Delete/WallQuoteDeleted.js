import React, {useContext} from 'react';
import {Context} from '../../../Context.js';
import WallDeletedOkBtn from './WallDeletedOkBtn.js';

function WallQuoteDeleted ({parentToChild}) {
  const {refs} = useContext(Context);
  const [message, setMessage] = refs.msg;
  const {config} = parentToChild;

  return (
    <div className={`BG-color${config.imgBG} text-color${config.colorNum}`}>
      {message !== ''
        &&  <p className={`shareIt`}
              >{message}</p>}
      <WallDeletedOkBtn parentToChild={parentToChild} />
    </div>
  );
};

export default WallQuoteDeleted;