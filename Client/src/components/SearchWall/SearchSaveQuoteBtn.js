import React, {useContext, useState} from 'react';
import {Context} from '../../Context.js';
import useRedirectTo from '../../functions/useRedirectTo.js';
import useGetSavedQuotes from '../../functions/userFunctions/useGetSavedQuotes.js';
import useCheckLoginCondition from '../../functions/userFunctions/useCheckLoginCondition.js';
import generateSearchQuoteObj from '../../functions/quoteFunctions/generateSearchQuoteObj.js';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function SearchSaveQuoteBtn({parentToChild}) {
  const {quote, refs} = useContext(Context);
  const savedQuotesArray = quote.saved;
  const [message, setMessage] = refs.msg;
  const [isLoading, setIsLoading] = useState(false);
  const {config, wall} = parentToChild;
  const redirectTo = useRedirectTo();
  const getSavedQuotes = useGetSavedQuotes();
  const checkLoginCondition = useCheckLoginCondition();

  const handleSearchSaveQuoteBtn = async () => {
    if (isLoading) return;
    if (checkLoginCondition()) {
      setIsLoading(true);
      const quoteObj = generateSearchQuoteObj(config);
      const response = await fetch('/api/users/quote/save', {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'},
        body: JSON.stringify({
          quoteObj: quoteObj
        }),
      });
      const json = await response.json();
      getSavedQuotes();
      setMessage(json.message);
      setIsLoading(false);
      redirectTo(`/${wall}/${config._id}/message`);
    };
  };

  return (
    <FontAwesomeIcon
      className={`clipBtn BG-color${config.colorNum} text-color${config.imgBG}`}
      onClick={handleSearchSaveQuoteBtn}
      icon='save' />
  );
};

export default SearchSaveQuoteBtn;