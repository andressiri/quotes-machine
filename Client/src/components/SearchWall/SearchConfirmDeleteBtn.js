import React, {useContext} from 'react';
import {Context} from '../../Context.js';
import useRedirectTo from '../../functions/useRedirectTo.js';

function SearchConfirmDeleteBtn ({parentToChild}) {
  const {quote, refs, force} = useContext(Context);
  const [searchArray, setSearchArray] = quote.search;
  const [message, setMessage] = refs.msg;
  const [forceUpdate, setForceUpdate] = force.update;
  const {config, index, wall} = parentToChild;
  const redirectTo = useRedirectTo();

  const handleSearchConfirmDeleteBtn = () =>  {
    setMessage('Quote Deleted');
    let auxArray = searchArray;
    let auxObj = {
      _id: config._id,
      colorNum: config.colorNum,
      imgBG: config.imgBG
    };
    auxArray[index] = auxObj;
    setSearchArray(auxArray);
    setForceUpdate(forceUpdate => forceUpdate + 1);
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