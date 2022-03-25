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
  const [messagesArray, setMessagesArray] = refs.msg;
  const [restartDefault, setRestartDefault] = edit.auto;
  const [isLoading, setIsLoading] = useState(false); 
  const shareImg = useShareImg();
  const redirectTo = useRedirectTo();
  const restartToDefault = useRestartDefault();  
  
  async function handleEditOkBtn () {
    if (isLoading) return;
    if (parentToChild.config._id === 'This was called by QuoteBox') {
      setMessagesArray(['Style has been saved']);
      if (shareChosen !== '') {
        await shareImg();
        setMessagesArray(['Quotes has been shared']);
        if (shareChosen === 'Clipboard') setMessagesArray(['Quote has been copied to clipboard']);
        setShareChosen('');
      };  
      if (restartDefault) restartToDefault();
      redirectTo('/box/message');            
    } else {
      setMessagesArray(['There is no change to save']);
      // check if there are changes to save
      if (JSON.stringify(savedQuotesArray[parentToChild.index]) !== JSON.stringify(savedQuotesBackup[parentToChild.index])) {
        setIsLoading(true);
        const quoteObj = await JSON.parse(JSON.stringify(savedQuotesArray[parentToChild.index]));
        const index = parentToChild.index;
        const response = await fetch("/users/saveModifiedQuote", {
          method: 'PUT',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'},
          body: JSON.stringify({
            quoteObj: quoteObj,
            index: index  
            })
        });
        let json = await response.json();
        if (json.message === 'Quote changes saved successfully') {
          let backupArrayAux = await JSON.parse(JSON.stringify(savedQuotesBackup));
          backupArrayAux[parentToChild.index] = quoteObj;
          setSavedQuotesBackup(backupArrayAux); 
        };
        setMessagesArray([json.message]);      
        setIsLoading(false);
      };
      redirectTo(`/wall/${parentToChild.config._id}/message`);
    };      
  }; 

  return (
    <FontAwesomeIcon className={`clipBtn BG-color${parentToChild.config.colorNum} text-color${parentToChild.config.imgBG}`} onClick={handleEditOkBtn} icon='check' />
  );
};

export default EditOkBtn;