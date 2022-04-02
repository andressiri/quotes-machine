import React, {useContext} from 'react';
import {Context} from '../../../Context.js';

function SerifFF ({parentToChild}) {
  const {edit, quote, force} = useContext(Context);
  const [fontFam, setFontFam] = edit.fontF;
  const [savedQuotesArray, setSavedQuotesArray] = quote.saved;
  const [forceUpdate, setForceUpdate] = force.update;
  const {config, index} = parentToChild;
  let serifBGColor = config.imgBG;
  let serifTxtColor = config.colorNum;
  const font = 'Garamond, serif';

  if (config.fontF === font) {
    serifBGColor = config.colorNum;
    serifTxtColor = config.imgBG;
  };

  const handleSerifFF = () => {
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
    <button
      className={`editBtn fFam BG-color${serifBGColor} text-color${serifTxtColor}`}
      style={{fontFamily: font}}
      onClick={handleSerifFF}
    >Aa</button>
  );
};

export default SerifFF;