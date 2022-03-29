import React, {useContext} from 'react';
import {Context} from '../../../Context.js';
import useRedirectTo from '../../../functions/useRedirectTo.js';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function DeletedOkBtn ({parentToChild}) {
  const {colors, quote, refs, force} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const [savedQuotesArray, setSavedQuotesArray] = quote.saved;
  const [savedQuotesBackup, setSavedQuotesBackup] = quote.backup;
  const [message, setMessage] = refs.msg;
  const [forceUpdate, setForceUpdate] = force.update;
  const {config, index} = parentToChild;
  const redirectTo = useRedirectTo();

  
  async function handleDeletedOkBtn () {
    if (message === 'Quote has been deleted') {
      savedQuotesArray.splice(index, 1);
      savedQuotesBackup.splice(index, 1);
      setForceUpdate(forceUpdate => forceUpdate + 1);
    };
    setTimeout(() => {  // Timeout to handle transition
      setMessage('');         
    }, 250);
    redirectTo('/wall');  
  }; 

  return (
    <FontAwesomeIcon
      className={`clipBtn BG-color${config.colorNum} text-color${config.imgBG}`}
      onClick={handleDeletedOkBtn}
      icon='check' />
  );
};

export default DeletedOkBtn;