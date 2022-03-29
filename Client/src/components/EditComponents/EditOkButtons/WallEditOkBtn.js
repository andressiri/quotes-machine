import React, {useContext, useState} from 'react';
import {Context} from '../../../Context.js';
import useRedirectTo from '../../../functions/useRedirectTo.js';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function WallEditOkBtn ({parentToChild}) {
  const {quote, refs, edit} = useContext(Context);
  const [savedQuotesArray, setSavedQuotesArray] = quote.saved;
  const [savedQuotesBackup, setSavedQuotesBackup] = quote.backup;
  const [message, setMessage] = refs.msg;
  const [isLoading, setIsLoading] = useState(false);
  const {config, index} = parentToChild; 
  const redirectTo = useRedirectTo();
  
  async function handleWallEditOkBtn () {
    if (isLoading) return;
    setMessage('There are no changes to save');
    // check if there are changes to save
    if (JSON.stringify(savedQuotesArray[index]) !== JSON.stringify(savedQuotesBackup[index])) {
      setIsLoading(true);
      const quoteObj = await JSON.parse(JSON.stringify(savedQuotesArray[index]));
      const response = await fetch("/users/saveModifiedQuote", {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'},
        body: JSON.stringify({
          quoteObj: quoteObj 
          })
      });
      let json = await response.json();
      if (json.message === 'Quote changes saved successfully') {
        let backupArrayAux = await JSON.parse(JSON.stringify(savedQuotesBackup));
        backupArrayAux[index] = quoteObj;
        setSavedQuotesBackup(backupArrayAux); 
      };
      setMessage(json.message);      
      setIsLoading(false);
    };
    redirectTo(`/wall/${config._id}/message`);
  }; 

  return (
    <FontAwesomeIcon
      className={`clipBtn BG-color${config.colorNum} text-color${config.imgBG}`}
      onClick={handleWallEditOkBtn}
      icon='check' />
  );
};

export default WallEditOkBtn;