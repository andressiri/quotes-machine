import React, {useContext} from 'react';
import {Context} from '../../../Context.js';
import useUpdateWallQuoteState from '../../../functions/DOMFunctions/useUpdateWallQuoteState.js';

function SansSerifFF ({parentToChild}) {
  const {edit} = useContext(Context);
  const [fontFam, setFontFam] = edit.fontF;
  const {config, index} = parentToChild;
  const updateWallQuoteState = useUpdateWallQuoteState();
  const font = 'Arial, Helvetica, sans-serif';
  let sansSerifBGColor = config.imgBG;
  let sansSerifTxtColor = config.colorNum;

  if (config.fontF === font) {
    sansSerifBGColor = config.colorNum;
    sansSerifTxtColor = config.imgBG;
  };

  const handleSansSerifFF = () => {
    if (config._id === 'This was called by QuoteBox') {
      setFontFam(font);
    } else {
      updateWallQuoteState(index, font, 'fontF');
    };
  };

  return (
    <button
      className={`editBtn fFam BG-color${sansSerifBGColor} text-color${sansSerifTxtColor}`}
      style={{fontFamily: font}}
      onClick={handleSansSerifFF}
    >Aa</button>
  );
};

export default SansSerifFF;