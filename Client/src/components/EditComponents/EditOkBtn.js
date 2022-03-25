import React, {useContext, useState} from 'react';
import {Context} from '../../Context.js';
import useRedirectTo from '../../functions/useRedirectTo.js';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import useShareImg from '../../functions/useShareImg.js';
import useRestartDefault from '../../functions/useRestartDefault.js';

function EditOkBtn ({parentToChild}) {
  const {refs, quote, edit} = useContext(Context);
  const [shareChosen, setShareChosen] = refs.sChosen;
  const [savedQuotesArray, setSavedQuotesArray] = quote.saved;
  const [savedQuotesBackup, setSavedQuotesBackup] = quote.backup;
  const [restartDefault, setRestartDefault] = edit.auto;
  const [isLoading, setIsLoading] = useState(false); 
  const shareImg = useShareImg();
  const redirectTo = useRedirectTo();
  const restartToDefault = useRestartDefault();  
  
  async function handleEditOkBtn () {
    if (isLoading) return;
    if (shareChosen !== '') {
      await shareImg();
      if (restartDefault) restartToDefault();
      setShareChosen('');
      redirectTo('/box/app');
      // check something has changed
    } else if (savedQuotesArray[parentToChild.index] !== savedQuotesBackup[parentToChild.index]) { 
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
      console.log(json.message);
      if (json.message === 'Quote changes saved successfully') {
        let backupArrayAux = await JSON.parse(JSON.stringify(savedQuotesBackup));
        backupArrayAux[parentToChild.index] = quoteObj;
        setSavedQuotesBackup(backupArrayAux); 
      };      
      setIsLoading(false);
      redirectTo('/wall');  //TODO ---> wall/${parentToChild.config._id}/changesSaved
    };      
  }; 

  return (
    <FontAwesomeIcon className={`clipBtn BG-color${parentToChild.config.colorNum} text-color${parentToChild.config.imgBG}`} onClick={handleEditOkBtn} icon='check' />
  );
};

export default EditOkBtn;