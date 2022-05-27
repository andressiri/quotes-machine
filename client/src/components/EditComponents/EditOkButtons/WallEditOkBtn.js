import React, {useContext, useState} from 'react';
import {Context} from '../../../Context.js';
import useGetIndexAtBackup from '../../../functions/quoteFunctions/useGetIndexAtBackup.js';
import useGetArrayToCheck from '../../../functions/quoteFunctions/useGetArrayToCheck.js';
import useRedirectTo from '../../../functions/useRedirectTo.js';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function WallEditOkBtn ({parentToChild}) {
  const {quote, refs} = useContext(Context);
  const [message, setMessage] = refs.msg;
  const savedQuotesBackup = quote.savedBUp;
  const searchBackup = quote.searchBUp;
  const [isLoading, setIsLoading] = useState(false);
  const {config, index, wall} = parentToChild;
  const getArrayToCheck = useGetArrayToCheck();
  const getIndexAtBackup = useGetIndexAtBackup();
  const redirectTo = useRedirectTo();
  let loading = 'notLoading';
  if (isLoading) loading = 'loading';
  
  const handleWallEditOkBtn = async () => {
    if (isLoading) return;
    setMessage('There are no changes to save');
    const arrayToCheck = getArrayToCheck(wall);
    const indexAtBackup = getIndexAtBackup(index, wall);
    if (wall === 'wall/saved') {
      // check if there are changes to save
      if (JSON.stringify(arrayToCheck[index]) !== JSON.stringify(savedQuotesBackup.current[indexAtBackup])) {
        // save at DB
        setIsLoading(true);
        const quoteObj = await JSON.parse(JSON.stringify(arrayToCheck[index]));
        const response = await fetch('/api/users/quote/edit', {
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
    };
    
    if (wall === 'wall/search') {
      if (JSON.stringify(arrayToCheck[index]) !== JSON.stringify(searchBackup.current[indexAtBackup])) {
        const quoteObj = await JSON.parse(JSON.stringify(arrayToCheck[index]));
        searchBackup.current[indexAtBackup] = quoteObj;
        setMessage('Quote edition saved');
      };
    };

    redirectTo(`/${wall}/${config._id}/message`);
  };

  return (
    <FontAwesomeIcon
      className={`clipBtn ${loading}Opacity BG-color${config.colorNum} text-color${config.imgBG}`}
      onClick={handleWallEditOkBtn}
      icon='check' />
  );
};

export default WallEditOkBtn;