import React, {useContext} from 'react';
import {Context} from '../../../Context.js';
import useRedirectTo from '../../../functions/useRedirectTo.js';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function SearchEditOkBtn ({parentToChild}) {
  const {quote, refs, edit} = useContext(Context);
  const [searchArray, setSearchArray] = quote.search;
  const [searchBackup, setSearchBackup] = quote.searchBUp;
  const [message, setMessage] = refs.msg;
  const {config, index, wall} = parentToChild;
  const redirectTo = useRedirectTo();
  
  const handleSearchEditOkBtn = async () => {
    setMessage('There is no edition to save');
    // check if there are changes to save
    if (JSON.stringify(searchArray[index]) !== JSON.stringify(searchBackup[index])) {
      const quoteObj = await JSON.parse(JSON.stringify(searchArray[index]));
      let backupArrayAux = await JSON.parse(JSON.stringify(searchBackup));
      backupArrayAux[index] = quoteObj;
      setSearchBackup(backupArrayAux);
      setMessage('Quote edition saved');
    };
    redirectTo(`/${wall}/${config._id}/wallMessage`);
  };

  return (
    <FontAwesomeIcon
      className={`clipBtn BG-color${config.colorNum} text-color${config.imgBG}`}
      onClick={handleSearchEditOkBtn}
      icon='check' />
  );
};

export default SearchEditOkBtn;