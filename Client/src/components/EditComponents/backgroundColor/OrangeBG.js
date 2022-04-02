import React, {useContext} from 'react';
import {Context} from '../../../Context.js';

function OrangeBG ({parentToChild}) {
  const {colors, quote, force} = useContext(Context);
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const [savedQuotesArray, setSavedQuotesArray] = quote.saved;
  const [forceUpdate, setForceUpdate] = force.update;
  const {config, index} = parentToChild;
  let orangeBGState = '';

  if (config.colorNum === 1) {
    orangeBGState = 'buttonDisabled';
  };
  if (config.imgBG === 1) {
    orangeBGState = `buttonEnabled text-color${config.colorNum}`;
  };

  const handleOrangeBG = () => {
    if (config._id === 'This was called by QuoteBox') {
      setImgBGColor(1);
    } else {
      let auxArray = savedQuotesArray;
      let auxObj = auxArray[index];
      auxObj.imgBG = 1;
      auxArray[index] = auxObj;
      setSavedQuotesArray(auxArray);
      setForceUpdate(forceUpdate => forceUpdate + 1);
    };
  };

  return (
    <button
      className={`editBtn BG-color1 ${orangeBGState}`}
      onClick={handleOrangeBG}
    ></button>
  );
};

export default OrangeBG;