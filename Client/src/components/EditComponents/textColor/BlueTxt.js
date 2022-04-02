import React, {useContext} from 'react';
import {Context} from '../../../Context.js';

function BlueTxt ({parentToChild}) {
  const {colors, quote, force} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [savedQuotesArray, setSavedQuotesArray] = quote.saved;
  const [forceUpdate, setForceUpdate] = force.update;
  const {config, index} = parentToChild;
  let blueTxtState = '';
  
  if (config.imgBG === 4) {
    blueTxtState = 'buttonDisabled';
  };
  if (config.colorNum === 4) {
    blueTxtState = `buttonEnabled text-color${config.imgBG}`;
  };

  const handleBlueTxt = () => {
    if (config._id === 'This was called by QuoteBox') {
      setColorNumber(4);
    } else {
      let auxArray = savedQuotesArray;
      let auxObj = auxArray[index];
      auxObj.colorNum = 4;
      auxArray[index] = auxObj;
      setSavedQuotesArray(auxArray);
      setForceUpdate(forceUpdate => forceUpdate + 1);
    };
  };

  return (
    <button
      className={`editBtn BG-color4 ${blueTxtState}`}
      onClick={handleBlueTxt}
    ></button>
  );
};

export default BlueTxt;