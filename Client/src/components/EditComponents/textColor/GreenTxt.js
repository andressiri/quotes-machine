import React, {useContext} from 'react';
import {Context} from '../../../Context.js';

function GreenTxt ({parentToChild}) {
  const {colors, quote, force} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [savedQuotesArray, setSavedQuotesArray] = quote.saved;
  const [forceUpdate, setForceUpdate] = force.update;
  const {config, index} = parentToChild;
  let greenTxtState = '';
  
  if (config.imgBG === 3) {
    greenTxtState = 'buttonDisabled';
  };
  if (config.colorNum === 3) {
    greenTxtState = `buttonEnabled text-color${config.imgBG}`;
  };

  const handleGreenTxt = () => {
    if (config._id === 'This was called by QuoteBox') {
      setColorNumber(3);
    } else {
      let auxArray = savedQuotesArray;
      let auxObj = auxArray[index];
      auxObj.colorNum = 3;
      auxArray[index] = auxObj;
      setSavedQuotesArray(auxArray);
      setForceUpdate(forceUpdate => forceUpdate + 1);
    };
  };

  return (
    <button
      className={`editBtn BG-color3 ${greenTxtState}`}
      onClick={handleGreenTxt}
    ></button>
  );
};

export default GreenTxt;