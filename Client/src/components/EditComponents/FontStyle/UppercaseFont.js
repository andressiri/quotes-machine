import React, {useContext} from 'react';
import {Context} from '../../../Context.js';
import useUpdateWallQuoteState from '../../../functions/DOMFunctions/useUpdateWallQuoteState.js';

function UppercaseFont ({parentToChild}) {
  const {edit} = useContext(Context);
  const [upperFont, setUpperFont] = edit.upperF;
  const {config, index, wall} = parentToChild;
  const updateWallQuoteState = useUpdateWallQuoteState();
  let upperBGColor = config.imgBG;
  let upperTxtColor = config.colorNum;

  if (config.upperF === 'uppercase') {
    upperBGColor = config.colorNum;
    upperTxtColor = config.imgBG;
  };

  const handleUppercaseFont = () => {
    if (config._id === 'This was called by QuoteBox') {
      if (config.upperF === 'none') return setUpperFont('uppercase');
      setUpperFont('none');
    } else {
      let auxValue = 'none';
      if (config.upperF === 'none') auxValue = 'uppercase';
      updateWallQuoteState(index, auxValue, 'upperF', wall);
    };
  };

  return (
    <button
      className={`editBtn fFam BG-color${upperBGColor} text-color${upperTxtColor}`}
      onClick={handleUppercaseFont}
    >UP</button>
  );
};

export default UppercaseFont;