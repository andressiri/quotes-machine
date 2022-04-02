import React, {useContext} from 'react';
import {Context} from '../../../Context.js';
import useUpdateWallQuoteState from '../../../functions/DOMFunctions/useUpdateWallQuoteState.js';

function SerifFF ({parentToChild}) {
  const {edit} = useContext(Context);
  const [fontFam, setFontFam] = edit.fontF;
  const {config, index} = parentToChild;
  const updateWallQuoteState = useUpdateWallQuoteState();
  const font = 'Garamond, serif';
  let serifBGColor = config.imgBG;
  let serifTxtColor = config.colorNum;

  if (config.fontF === font) {
    serifBGColor = config.colorNum;
    serifTxtColor = config.imgBG;
  };

  const handleSerifFF = () => {
    if (config._id === 'This was called by QuoteBox') {
      setFontFam(font);
    } else {
      updateWallQuoteState(index, font, 'fontF');
    };
  };
  
  return (
    <button
      className={`editBtn fFam BG-color${serifBGColor} text-color${serifTxtColor}`}
      style={{fontFamily: font}}
      onClick={handleSerifFF}
    >Aa</button>
  );
};

export default SerifFF;