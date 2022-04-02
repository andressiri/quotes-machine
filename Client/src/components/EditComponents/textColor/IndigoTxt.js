import React, {useContext} from 'react';
import {Context} from '../../../Context.js';

function IndigoTxt ({parentToChild}) {
  const {colors, quote, force} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [savedQuotesArray, setSavedQuotesArray] = quote.saved;
  const [forceUpdate, setForceUpdate] = force.update;
  const {config, index} = parentToChild;
  let indigoTxtState = '';
  
  if (config.imgBG === 5) {
    indigoTxtState = 'buttonDisabled';
  };
  if (config.colorNum === 5) {
    indigoTxtState = `buttonEnabled text-color${config.imgBG}`;
  };

  const handleIndigoTxt = () => {
    if (config._id === 'This was called by QuoteBox') {
      setColorNumber(5);
    } else {
      let auxArray = savedQuotesArray;
      let auxObj = auxArray[index];
      auxObj.colorNum = 5;
      auxArray[index] = auxObj;
      setSavedQuotesArray(auxArray);
      setForceUpdate(forceUpdate => forceUpdate + 1);
    };
  };

  return (
    <button
      className={`editBtn BG-color5 ${indigoTxtState}`}
      onClick={handleIndigoTxt}
    ></button>
  );
};

export default IndigoTxt;