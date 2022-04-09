import React, {useContext, useState} from 'react';
import {Context} from '../../Context.js';
import useRedirectTo from '../../functions/useRedirectTo.js';

function SavedConfirmDeleteBtn ({parentToChild}) {
  const {quote, refs} = useContext(Context);
  const savedQuotesArray = quote.saved;
  const [message, setMessage] = refs.msg;
  const [isLoading, setIsLoading] = useState(false);
  const {config, index, wall} = parentToChild;
  const redirectTo = useRedirectTo();

  const handleSavedConfirmDeleteBtn = async () =>  {
    if (isLoading) return;
    setIsLoading(true);
    const response = await fetch('/users/deleteSavedQuote', {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({id: config._id}),
    });
    const json = await response.json();
    setMessage(json.message);
    setIsLoading(false);
    if (response.status === 200) {
      let auxArray = savedQuotesArray.current;
      let auxObj = {
          _id: config._id,
          colorNum: config.colorNum,
          imgBG: config.imgBG
      };
      auxArray[index] = auxObj;
      savedQuotesArray.current = auxArray
      redirectTo(`/${wall}`);
    } else {
      redirectTo(`/${wall}/${config._id}/wallMessage`);
    };
  };

  return (
    <button
      className={`NQbtn BG-color${config.colorNum} text-color${config.imgBG}`}
      onClick={handleSavedConfirmDeleteBtn}
    >Confirm</button>
  );
};

export default SavedConfirmDeleteBtn;