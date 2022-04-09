import React, {useContext} from 'react';
import {Context} from '../../../Context.js';
import useRedirectTo from '../../../functions/useRedirectTo.js';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function WallDeletedOkBtn ({parentToChild}) {
  const {quote, refs} = useContext(Context);
  const savedQuotesArray = quote.saved;
  const savedQuotesBackup = quote.savedBUp;
  const searchArray = quote.search;
  const searchBackup = quote.searchBUp;
  const [message, setMessage] = refs.msg;
  const {config, index, wall} = parentToChild;
  const redirectTo = useRedirectTo();
  
  const handleWallDeletedOkBtn = () => {
    if (wall === 'savedWall' && message === 'Quote has been deleted') {
      savedQuotesArray.current.splice(index, 1);
      savedQuotesBackup.current.splice(index, 1);
    };
    if (wall === 'searchWall') {
      searchArray.current.splice(index, 1);
      searchBackup.current.splice(index, 1);
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