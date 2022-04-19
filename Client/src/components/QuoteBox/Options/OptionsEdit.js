import React, {useContext} from 'react';
import {Context} from '../../../Context.js';
import useRedirectTo from '../../../functions/useRedirectTo.js';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function OptionsEdit () {
  const {colors} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const redirectTo = useRedirectTo();
   
  const handleOptionsEdit = () => {
    redirectTo('/box/options/edit');
  };

  return (
    <div className={'optionsDiv'}>
      <FontAwesomeIcon
        className={`BG-color${colorNumber} text-color${imgBGColor} optionsBtn`}
        onClick={handleOptionsEdit}
        icon='pen'
      />
      <h3
        className={`BG-color${colorNumber} text-color${imgBGColor} optionsText`}
        onClick={handleOptionsEdit}
      >Quote permanent customization</h3>
    </div>
  );
};

export default OptionsEdit;