import React, {useContext} from 'react';
import {Context} from '../../Context.js';
import useRedirectTo from '../../functions/useRedirectTo.js';

function SearchConfirmDeleteBtn ({parentToChild}) {
  const {quote, refs} = useContext(Context);
  const searchArray = quote.search;
  const [message, setMessage] = refs.msg;
  const {config, index, wall} = parentToChild;
  const redirectTo = useRedirectTo();

  const handleSearchConfirmDeleteBtn = () =>  {
    setMessage('Quote Deleted');
    let auxObj = {
      _id: config._id,
      colorNum: config.colorNum,
      imgBG: config.imgBG
    };
    searchArray.current[index] = auxObj;
    redirectTo(`/${wall}`);
  };

  return (
    <button
      className={`NQbtn BG-color${config.colorNum} text-color${config.imgBG}`}
      onClick={handleSearchConfirmDeleteBtn}
    >Confirm</button>
  );
};

export default SearchConfirmDeleteBtn;