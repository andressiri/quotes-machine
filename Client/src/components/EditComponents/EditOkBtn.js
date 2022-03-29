import React, {useContext, useState} from 'react';
import {Context} from '../../Context.js';
import useRedirectTo from '../../functions/useRedirectTo.js';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import useShareImg from '../../functions/useShareImg.js';
import useRestartDefault from '../../functions/useRestartDefault.js';

function EditOkBtn ({parentToChild}) {
  const {quote, refs, edit} = useContext(Context);
  const [savedQuotesArray, setSavedQuotesArray] = quote.saved;
  const [savedQuotesBackup, setSavedQuotesBackup] = quote.backup;
  const [shareChosen, setShareChosen] = refs.sChosen;
  const [message, setMessage] = refs.msg;
  const [restartDefault, setRestartDefault] = edit.auto;
  const [isLoading, setIsLoading] = useState(false);
  const {config, index} = parentToChild; 
  const shareImg = useShareImg();
  const redirectTo = useRedirectTo();
  const restartToDefault = useRestartDefault();  
  
  async function handleEditOkBtn () {
    if (isLoading) return;
    // if in quote box
    if (config._id === 'This was called by QuoteBox') {
      setMessage('Style has been saved');
      if (shareChosen !== '') {
        await shareImg();
        setMessage('Quotes has been shared');
        if (shareChosen === 'Clipboard') setMessage('Quote has been copied to clipboard');
        setShareChosen('');
      };  
      if (restartDefault) restartToDefault();
      redirectTo('/box/message');            
    } else {
    // if at wall  
      setMessage('There is no change to save');
      // check if there are changes to save
      if (JSON.stringify(savedQuotesArray[index]) !== JSON.stringify(savedQuotesBackup[index])) {
        setIsLoading(true);
        const quoteObj = await JSON.parse(JSON.stringify(savedQuotesArray[index]));
        const index = index;
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
  }; 

  return (
    <FontAwesomeIcon
      className={`clipBtn BG-color${config.colorNum} text-color${config.imgBG}`}
      onClick={handleEditOkBtn}
      icon='check' />
  );
};

export default EditOkBtn;