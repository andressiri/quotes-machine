import React, {useContext} from 'react';
import {Context} from '../../../Context.js';

function ItalicFont ({parentToChild}) {
  const {edit, quote, force} = useContext(Context);
  const [italicFont, setItalicFont] = edit.italicF;
  const [savedQuotesArray, setSavedQuotesArray] = quote.saved;
  const [forceUpdate, setForceUpdate] = force.update;
  const {config, index} = parentToChild;
  let italicBGColor = config.imgBG;
  let italicTxtColor = config.colorNum;

  if (config.italicF === 'italic') {
    italicBGColor = config.colorNum;
    italicTxtColor = config.imgBG;
  };

  const handleItalicFont = () => {
    if (config._id === 'This was called by QuoteBox') {
      if (config.italicF === 'normal') return setItalicFont('italic');
      setItalicFont('normal');
    } else {
      let auxArray = savedQuotesArray;
      let auxObj = auxArray[index];
      if (config.italicF === 'normal') {
        auxObj.italicF = 'italic';
      } else {
        auxObj.italicF = 'normal';
      };
      auxArray[index] = auxObj;
      setSavedQuotesArray(auxArray);
      setForceUpdate(forceUpdate => forceUpdate + 1);
    };
  };
  
  return (
    <button
      className={`editBtn fFam BG-color${italicBGColor} text-color${italicTxtColor}`}
      style={{fontStyle: 'italic'}}
      onClick={handleItalicFont}
    >I</button>
  );
};

export default ItalicFont;