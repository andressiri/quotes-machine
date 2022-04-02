import React, {useContext} from 'react';
import {Context} from '../../../Context.js';
import useRedirectTo from '../../../functions/useRedirectTo.js';
import useCancelEdition from '../../../functions/DOMFunctions/useCancelEdition';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function WallEditCancelBtn ({parentToChild}) {
  const {refs} = useContext(Context);
  const [message, setMessage] = refs.msg;
  const redirectTo = useRedirectTo();
  const cancelEdition = useCancelEdition();
  const {config, index} = parentToChild;
  
  const handleWallEditCancelBtn = () => {
    setMessage('Edition has been canceled');
    cancelEdition(index);
    redirectTo(`/wall/${config._id}/message`);
  };

  return (
    <FontAwesomeIcon
      className={`clipBtn BG-color${config.colorNum} text-color${config.imgBG}`}
      onClick={handleWallEditCancelBtn}
      icon='ban' />
  );
};

export default WallEditCancelBtn;