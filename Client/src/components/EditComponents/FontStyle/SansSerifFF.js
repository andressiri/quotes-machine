import React, {useContext} from 'react';
import {Context} from '../../../Context.js';

function SansSerifFF ({parentToChild}) {
  const {edit, quote, force} = useContext(Context);
  const [fontFam, setFontFam] = edit.fontF;
  const [savedQuotesArray, setSavedQuotesArray] = quote.saved;
  const [forceUpdate, setForceUpdate] = force.update;
  const {config, index} = parentToChild;
  let sansSerifBGColor = config.imgBG;
  let sansSerifTxtColor = config.colorNum;
  const font = 'Arial, Helvetica, sans-serif';

  if (config.fontF === font) {
    sansSerifBGColor = config.colorNum;
    sansSerifTxtColor = config.imgBG;
  };

  const handleSansSerifFF = () => {
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
      className={`editBtn fFam BG-color${sansSerifBGColor} text-color${sansSerifTxtColor}`}
      style={{fontFamily: font}}
      onClick={handleSansSerifFF}
    >Aa</button>
  );
};

export default SansSerifFF;