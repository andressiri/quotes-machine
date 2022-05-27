import React, {useContext} from 'react';
import {Context} from '../../../../Context.js';
import useStopAuto from '../../../../functions/quoteFunctions/useStopAuto.js'; 
import useRedirectToWall from '../../../../functions/useRedirectToWall.js';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function SearchBtn() {
  const {colors, refs} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const stopAuto = useStopAuto();
  const redirectToWall = useRedirectToWall();

  const handleSearchBtn = () => {
    stopAuto();
    redirectToWall('/wall/search');
  };

  return (
    <FontAwesomeIcon
      className={`clipBtn BG-color${colorNumber} text-color${imgBGColor}`}
      onClick={handleSearchBtn}
      icon='search' />
  );
};

export default SearchBtn;