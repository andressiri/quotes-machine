import React, {useContext} from 'react';
import {Context} from '../../../Context.js';
import useUpdateWallQuoteState from '../../../functions/DOMFunctions/useUpdateWallQuoteState.js';

function CursiveFF ({parentToChild}) {
  const {edit} = useContext(Context);
  const [fontFam, setFontFam] = edit.fontF;
  const {config, index} = parentToChild;
  const updateWallQuoteState = useUpdateWallQuoteState();
  const font = '"Brush Script MT", cursive';
  let cursiveBGColor = config.imgBG;
  let cursiveTxtColor = config.colorNum;

  if (config.fontF === font) {
    cursiveBGColor = config.colorNum;
    cursiveTxtColor = config.imgBG;
  };

  const handleCursiveFF = () => {
    if (config._id === 'This was called by QuoteBox') {
      setFontFam(font);
    } else {
      updateWallQuoteState(index, font, 'fontF');
    };
  };

  return (
    <label>
      <button
        className={`editBtn fFam BG-color${cursiveBGColor} text-color${cursiveTxtColor}`}
        style={{fontFamily: font}}
        onClick={handleCursiveFF}
      ><div id='cursiveBtn'>Aa</div></button>
    </label>
  );
};

export default CursiveFF;