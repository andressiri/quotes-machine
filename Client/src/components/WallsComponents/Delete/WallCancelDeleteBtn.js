import React, {useContext} from 'react';
import {Context} from '../../../Context.js';
import useRedirectTo from '../../../functions/useRedirectTo.js';

function WallCancelDeleteBtn ({parentToChild}) {
  const {refs} = useContext(Context);
  const [message, setMessage] = refs.msg;
  const {config, wall} = parentToChild;
  const redirectTo = useRedirectTo();

  const handleWallCancelDeleteBtn = () => {
    setMessage('Quote elimination canceled');
    redirectTo(`/${wall}/${config._id}/message`);
  };

  return (
    <button
      className={`textBtn BG-color${config.colorNum} text-color${config.imgBG}`}
      onClick={handleWallCancelDeleteBtn}
    >No, thanks</button>
  );
};

export default WallCancelDeleteBtn;