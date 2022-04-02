import React, {useContext} from 'react';
import {Context} from '../../../Context.js';

function WhiteTxt ({parentToChild}) {
  const {colors, quote, force} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [savedQuotesArray, setSavedQuotesArray] = quote.saved;
  const [forceUpdate, setForceUpdate] = force.update;
  const {config, index} = parentToChild;
  let whiteTxtState = '';
  
  if (config.imgBG === 8 || config.imgBG === 2) {
    whiteTxtState = 'buttonDisabled';
  };
  if (config.colorNum === 8) {
    whiteTxtState = `buttonEnabled text-color${config.imgBG}`;
  };

  const handleWhiteTxt = () => {
    if (config._id === 'This was called by QuoteBox') {
      setColorNumber(8);
    } else {
      let auxArray = savedQuotesArray;
      let auxObj = auxArray[index];
      auxObj.colorNum = 8;
      auxArray[index] = auxObj;
      setSavedQuotesArray(auxArray);
      setForceUpdate(forceUpdate => forceUpdate + 1);
    };
  };

  return (
    <button
      className={`editBtn BG-color8 ${whiteTxtState}`}
      onClick={handleWhiteTxt}
    ></button>
  );
};

export default WhiteTxt;