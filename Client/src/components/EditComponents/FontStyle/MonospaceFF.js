import React, {useContext} from 'react';
import {Context} from '../../../Context.js';
import useUpdateWallQuoteState from '../../../functions/DOMFunctions/useUpdateWallQuoteState.js';

function MonospaceFF ({parentToChild}) {
  const {edit} = useContext(Context);
  const [fontFam, setFontFam] = edit.fontF;
  const {config, index, wall} = parentToChild;
  const updateWallQuoteState = useUpdateWallQuoteState();
  const font = '"Courier New", Courier, monospace';
  let monospaceBGColor = config.imgBG;
  let monospaceTxtColor = config.colorNum;

  if (config.fontF === font) {
    monospaceBGColor = config.colorNum;
    monospaceTxtColor = config.imgBG;
  };

  const handleMonospaceFF = () => {
    if (config._id === 'This was called by QuoteBox') {
      setFontFam(font);
    } else {
      updateWallQuoteState(index, font, 'fontF', wall);
    };
  };

  return (
    <button
      className={`editBtn fFam BG-color${monospaceBGColor} text-color${monospaceTxtColor}`}
      style={{fontFamily: font}}
      onClick={handleMonospaceFF}
    ><div id='monospaceBtn'>Aa</div></button>
  );
};

export default MonospaceFF;