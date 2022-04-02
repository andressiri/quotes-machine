import React, {useContext, useState} from 'react';
import {Context} from '../../../Context.js';
import useRedirectTo from '../../../functions/useRedirectTo.js';

function ConfirmDeleteBtn ({parentToChild}) {
  const {quote, refs, force} = useContext(Context);
  const [savedQuotesArray, setSavedQuotesArray] = quote.saved;
  const [message, setMessage] = refs.msg;
  const [forceUpdate, setForceUpdate] = force.update;
  const [isLoading, setIsLoading] = useState(false);
  const {config, index} = parentToChild;
  const redirectTo = useRedirectTo();

  const handleConfirmDeleteBtn = async () =>  {
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
    let json = await response.json();
    setMessage(json.message);
    setIsLoading(false);
    if (json.success) {
      let auxArray = savedQuotesArray;
      let auxObj = {
          _id: config._id,
          colorNum: config.colorNum,
          imgBG: config.imgBG
      };
      auxArray[index] = auxObj;
      setSavedQuotesArray(auxArray);
      setForceUpdate(forceUpdate => forceUpdate + 1);
      redirectTo('/wall');
    } else {
      redirectTo(`/wall/${config._id}/message`);
    };
  };

  return (
    <button
      className={`NQbtn BG-color${config.colorNum} text-color${config.imgBG}`}
      onClick={handleConfirmDeleteBtn}
    >Confirm</button>
  );
};

export default ConfirmDeleteBtn;