import React, {useContext} from 'react';
import {Context} from '../../../Context.js';
import useRedirectTo from '../../../functions/useRedirectTo.js';
import useSearchCancelEdition from '../../../functions/DOMFunctions/useSearchCancelEdition';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function SearchEditCancelBtn ({parentToChild}) {
  const {refs} = useContext(Context);
  const [message, setMessage] = refs.msg;
  const redirectTo = useRedirectTo();
  const searchCancelEdition = useSearchCancelEdition();
  const {config, index, wall} = parentToChild;
  
  const handleSearchEditCancelBtn = () => {
    setMessage('Edition has been canceled');
    searchCancelEdition(index, wall);
    redirectTo(`/${wall}/${config._id}/wallMessage`);
  };

  return (
    <FontAwesomeIcon
      className={`clipBtn BG-color${config.colorNum} text-color${config.imgBG}`}
      onClick={handleSearchEditCancelBtn}
      icon='ban' />
  );
};

export default SearchEditCancelBtn;