import React, {useContext, useState} from 'react';
import {Context} from '../../../Context.js';
import useGetArrayToCheck from '../../../functions/quoteFunctions/useGetArrayToCheck.js';
import useGetIndexAtBackup from '../../../functions/quoteFunctions/useGetIndexAtBackup.js';
import useRedirectTo from '../../../functions/useRedirectTo.js';

function WallConfirmDeleteBtn ({parentToChild}) {
  const {quote, refs} = useContext(Context);
  const savedQuotesArray = quote.saved;
  const savedQuotesBackup = quote.savedBUp;
  const searchArray = quote.search;
  const searchBackup = quote.searchBUp;
  const [message, setMessage] = refs.msg;
  const [isLoading, setIsLoading] = useState(false);
  const {config, index, wall} = parentToChild;
  const getArrayToCheck = useGetArrayToCheck();
  const getIndexAtBackup = useGetIndexAtBackup();
  const redirectTo = useRedirectTo();

  const handleWallConfirmDeleteBtn = async () =>  {
    const arrayToCheck = getArrayToCheck(wall);
    const indexAtBackup = getIndexAtBackup(index, wall);
    setMessage('Quote has been deleted');
    let auxObj = {
      _id: config._id,
      colorNum: config.colorNum,
      imgBG: config.imgBG
    };

    if (wall === 'wall/saved') {
      if (isLoading) return;
      setIsLoading(true);
      const response = await fetch(`/api/users/quote/delete/${config._id}`, {method: 'DELETE'});
      const json = await response.json();
      setIsLoading(false);
      if (response.status !== 200) {
        setMessage(json.message);
        redirectTo(`/${wall}/${config._id}/message`);
        return;
      } else {
        savedQuotesArray.current[indexAtBackup] = auxObj;
        savedQuotesBackup.current[indexAtBackup] = auxObj;
      };
    };

    if (wall === 'wall/search') {
      searchArray.current[indexAtBackup] = auxObj;
      searchBackup.current[indexAtBackup] = auxObj;
    };

    arrayToCheck[index] = auxObj;
    redirectTo(`/${wall}`);
  };

  return (
    <button
      className={`NQbtn BG-color${config.colorNum} text-color${config.imgBG}`}
      onClick={handleWallConfirmDeleteBtn}
    >Confirm</button>
  );
};

export default WallConfirmDeleteBtn;