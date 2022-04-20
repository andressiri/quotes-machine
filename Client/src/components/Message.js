import React, {useContext, useEffect, useState} from 'react';
import {Context} from '../Context.js';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function Message({parentToChild}) {
  const {refs} = useContext(Context);
  const [message, setMessage] = refs.msg;
  const [closeMessage, setCloseMessage] = useState(true);
  let {defaultMessage, waitMessage, config} = parentToChild;

  useEffect(() => {
    if (message !== '') setCloseMessage(false);
  }, [message]);

  useEffect(() => {
    if ( defaultMessage !== '' || waitMessage !== '') setCloseMessage(false);
  }, []);

  const handleCloseMessage = () => {
    setCloseMessage(true);
    if (waitMessage === '') setMessage('');
  };

  if (closeMessage) {
    return (<div/>);
  } else {
    return (
      <div className={'messageDiv'}>
        <h4 className={`BG-color${config.colorNum} text-color${config.imgBG} messageText`}>
          {waitMessage || message || defaultMessage}
        </h4>
        <FontAwesomeIcon
          className={`BG-color${config.colorNum} text-color${config.imgBG} closeMessage`}
          onClick={handleCloseMessage}
          icon='times'
        />
      </div>
    );
  };
};

export default Message;