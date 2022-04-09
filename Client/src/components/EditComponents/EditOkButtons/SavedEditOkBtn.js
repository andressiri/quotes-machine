import React, {useContext, useState} from 'react';
import {Context} from '../../../Context.js';
import useRedirectTo from '../../../functions/useRedirectTo.js';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function SavedEditOkBtn ({parentToChild}) {
  const {quote, refs, edit} = useContext(Context);
  const savedQuotesArray  = quote.saved;
  const savedQuotesBackup = quote.savedBUp;
  const [message, setMessage] = refs.msg;
  const [isLoading, setIsLoading] = useState(false);
  const {config, index, wall} = parentToChild;
  const redirectTo = useRedirectTo();
  
  const handleSavedEditOkBtn = async () => {
    if (isLoading) return;
    setMessage('There are no changes to save');
    // check if there are changes to save
    if (JSON.stringify(savedQuotesArray.current[index]) !== JSON.stringify(savedQuotesBackup.current[index])) {
      setIsLoading(true);
      const quoteObj = await JSON.parse(JSON.stringify(savedQuotesArray.current[index]));
      const response = await fetch('/users/saveModifiedQuote', {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'},
        body: JSON.stringify({
          quoteObj: quoteObj
          })
      });
      const json = await response.json();
      if (response.status === 200) {
        let backupArrayAux = await JSON.parse(JSON.stringify(savedQuotesBackup.current));
        backupArrayAux[index] = quoteObj;
        savedQuotesBackup.current = backupArrayAux;
      };
      setMessage(json.message);
      setIsLoading(false);
    };
    redirectTo(`/${wall}/${config._id}/wallMessage`);
  };

  return (
    <FontAwesomeIcon
      className={`clipBtn BG-color${config.colorNum} text-color${config.imgBG}`}
      onClick={handleSavedEditOkBtn}
      icon='check' />
  );
};

export default SavedEditOkBtn;