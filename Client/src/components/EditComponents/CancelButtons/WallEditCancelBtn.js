import React, {useContext} from 'react';
import {Context} from '../../../Context.js';
import useRedirectTo from '../../../functions/useRedirectTo.js';
import useWallCancelEdition from '../../../functions/DOMFunctions/useWallCancelEdition';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function WallEditCancelBtn ({parentToChild}) {
  const {refs} = useContext(Context);
  const [message, setMessage] = refs.msg;
  const redirectTo = useRedirectTo();
  const wallCancelEdition = useWallCancelEdition();
  const {config, index, wall} = parentToChild;
  
  const handleWallEditCancelBtn = () => {
    setMessage('Edition has been canceled');
    wallCancelEdition(index, wall);
    redirectTo(`/${wall}/${config._id}/wallMessage`);
  };

  return (
    <FontAwesomeIcon
      className={`clipBtn BG-color${config.colorNum} text-color${config.imgBG}`}
      onClick={handleWallEditCancelBtn}
      icon='ban' />
  );
};

export default WallEditCancelBtn;