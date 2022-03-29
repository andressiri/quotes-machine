import React, {useContext} from 'react';
import {Context} from '../../../../Context.js';
import useStopAuto from '../../../../functions/useStopAuto.js'; 
import useRedirectTo from '../../../../functions/useRedirectTo.js';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function CreateQuoteBtn() {
  const {colors, refs} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const [loggedIn, setLoggedIn] = refs.logged;
  const stopAuto = useStopAuto();
  const redirectTo = useRedirectTo();

  async function handleCreateQuoteBtn () {
    stopAuto();
    //Will go to a menu for creating quotes
    console.log('Still in construction');   
  };

  return (
    <FontAwesomeIcon
      className={`clipBtn BG-color${colorNumber} text-color${imgBGColor}`}
      onClick={handleCreateQuoteBtn}
      icon='lightbulb' />
  );
};

export default CreateQuoteBtn;