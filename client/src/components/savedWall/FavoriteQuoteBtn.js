import React, {useContext, useState} from 'react';
import {Context} from '../../Context.js';
import useGetArrayToCheck from '../../functions/quoteFunctions/useGetArrayToCheck.js';
import useGetIndexAtBackup from '../../functions/quoteFunctions/useGetIndexAtBackup.js';
import useRedirectTo from '../../functions/useRedirectTo';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function FavoriteQuoteBtn ({parentToChild}) {
  const {quote, refs} = useContext(Context);
  const savedQuotesBackup = quote.savedBUp;
  const [message, setMessage] = refs.msg;
  const [isLoading, setIsLoading] = useState(false);
  const {config, index, wall} = parentToChild;
  const getArrayToCheck = useGetArrayToCheck();
  const getIndexAtBackup = useGetIndexAtBackup();
  const redirectTo = useRedirectTo();
  let loading = 'notLoading';
  if (isLoading) loading = 'loading';

  const handleFavoriteQuoteBtn = async () => {
    if (isLoading) return;
    setIsLoading(true);
    const arrayToCheck = getArrayToCheck(wall);
    const auxObj = arrayToCheck[index];
    auxObj.favorite = !auxObj.favorite;
    const response = await fetch('/api/users/quote/edit', {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'},
      body: JSON.stringify({
        quoteObj: auxObj
      }),
    });
    const json = await response.json();
    setMessage(json.message);
    if (response.status === 200) {
      if (auxObj.favorite === true) setMessage('Quote added to favorites');
      if (auxObj.favorite === false) setMessage('Quote removed from favorites');
      const indexAtBackup = getIndexAtBackup(index, wall)
      savedQuotesBackup.current[indexAtBackup] = await JSON.parse(JSON.stringify(auxObj));
    };
    setIsLoading(false);
    redirectTo(`/${wall}/${config._id}/message`);
  };

  return (
    <>
      {config.favorite === true
        ? <FontAwesomeIcon
            className={`clipBtn ${loading}Opacity BG-color${config.colorNum} text-color${config.imgBG}`}
            onClick={handleFavoriteQuoteBtn}
            icon='star' />
        : <FontAwesomeIcon
            className={`clipBtn BG-color${config.colorNum} text-color${config.imgBG}`}
            onClick={handleFavoriteQuoteBtn}
            icon='star-half-alt' />
      }
    </>
  );
};

export default FavoriteQuoteBtn;