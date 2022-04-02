import React, {useContext} from 'react';
import {Context} from '../../../Context.js';

function CursiveFF ({parentToChild}) {
  const {edit, quote, force} = useContext(Context);
  const [fontFam, setFontFam] = edit.fontF;
  const [savedQuotesArray, setSavedQuotesArray] = quote.saved;
  const [forceUpdate, setForceUpdate] = force.update;
  const {config, index} = parentToChild;
  let cursiveBGColor = config.imgBG;
  let cursiveTxtColor = config.colorNum;
  const font = '"Brush Script MT", cursive';

  if (config.fontF === font) {
    cursiveBGColor = config.colorNum;
    cursiveTxtColor = config.imgBG;
  };

  const handleCursiveFF = () => {
    if (config._id === 'This was called by QuoteBox') {
      setFontFam(font);
    } else {
      let auxArray = savedQuotesArray;
      let auxObj = auxArray[index];
      auxObj.fontF = font;
      auxArray[index] = auxObj;
      setSavedQuotesArray(auxArray);
      setForceUpdate(forceUpdate => forceUpdate + 1);
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