import React, {useContext} from 'react';
import {Context} from '../../../Context.js';
import useRedirectTo from '../../../functions/useRedirectTo.js';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function WallDeletedOkBtn ({parentToChild}) {
  const {quote, refs, force} = useContext(Context);
  const [savedQuotesArray, setSavedQuotesArray] = quote.saved;
  const [savedQuotesBackup, setSavedQuotesBackup] = quote.savedBUp;
  const [message, setMessage] = refs.msg;
  const [forceUpdate, setForceUpdate] = force.update;
  const {config, index, wall} = parentToChild;
  const redirectTo = useRedirectTo();
  
  const handleWallDeletedOkBtn = () => {
    if (message === 'Quote has been deleted') {
      savedQuotesArray.splice(index, 1);
      savedQuotesBackup.splice(index, 1);
      setForceUpdate(forceUpdate => forceUpdate + 1);
    };
    setTimeout(() => {  // Timeout to handle transition
      setMessage('');
    }, 250);
    redirectTo(`/${wall}`);
  };

  return (
    <FontAwesomeIcon
      className={`clipBtn BG-color${config.colorNum} text-color${config.imgBG}`}
      onClick={handleWallDeletedOkBtn}
      icon='check' />
  );
};

export default WallDeletedOkBtn;