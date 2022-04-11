import React, {useContext, useState} from 'react';
import {Context} from '../../../Context.js';
import useRedirectTo from '../../../functions/useRedirectTo.js';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import useGetIndexAtBackup from '../../../functions/quoteFunctions/useGetIndexAtBackup.js';
import useGetArrayToCheck from '../../../functions/quoteFunctions/useGetArrayToCheck.js';

function SavedEditOkBtn ({parentToChild}) {
  const {quote, refs} = useContext(Context);
  const [message, setMessage] = refs.msg;
  const savedQuotesBackup = quote.savedBUp;
  const [isLoading, setIsLoading] = useState(false);
  const {config, index, wall} = parentToChild;
  const redirectTo = useRedirectTo();
  const getArrayToCheck = useGetArrayToCheck();
  const getIndexAtBackup = useGetIndexAtBackup();
  
  const handleSavedEditOkBtn = async () => {
    if (isLoading) return;
    setMessage('There are no changes to save');
    const arrayToCheck = getArrayToCheck(wall);
    const indexAtBackup = getIndexAtBackup(index, wall);
    // check if there are changes to save
    if (JSON.stringify(arrayToCheck[index]) !== JSON.stringify(savedQuotesBackup.current[indexAtBackup])) {
      // save at DB
      setIsLoading(true);
      const quoteObj = await JSON.parse(JSON.stringify(arrayToCheck[index]));
      const response = await fetch('/users/saveModifiedQuote', {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'},
        body: JSON.stringify({quoteObj: quoteObj})
      });
      const json = await response.json();
      // update at backup
      if (response.status === 200) {
        savedQuotesBackup.current[indexAtBackup] = quoteObj;
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