import React, {useContext, useState} from 'react';
import {Context} from '../../Context.js';
import useRedirectTo from '../../functions/useRedirectTo';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function FavoriteQuoteBtn ({parentToChild}) {
  const {quote, refs} = useContext(Context);
  const savedQuotesArray  = quote.saved;
  const savedQuotesBackup = quote.savedBUp;
  const [message, setMessage] = refs.msg;
  const [isLoading, setIsLoading] = useState(false);
  const {config, index, wall} = parentToChild;
  const redirectTo = useRedirectTo();

  const handleFavoriteQuoteBtn = async () => {
    if (isLoading) return;
    setIsLoading(true);
    const auxObj = savedQuotesArray.current[index];
    auxObj.favorite = !auxObj.favorite;
    const response = await fetch('/users/saveModifiedQuote', {
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
    if (response.status === 200) savedQuotesBackup.current[index] = await JSON.parse(JSON.stringify(auxObj));
    setIsLoading(false);
    redirectTo(`/${wall}/${config._id}/wallMessage`);
  };

  return (
    <div>
      {config.favorite === true
        ? <FontAwesomeIcon
            className={`clipBtn BG-color${config.colorNum} text-color${config.imgBG}`}
            onClick={handleFavoriteQuoteBtn}
            icon='star' />
        : <FontAwesomeIcon
            className={`clipBtn BG-color${config.colorNum} text-color${config.imgBG}`}
            onClick={handleFavoriteQuoteBtn}
            icon='star-half-alt' />
      }
    </div>
  );
};

export default FavoriteQuoteBtn;