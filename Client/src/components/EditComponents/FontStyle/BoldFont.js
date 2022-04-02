import React, {useContext} from 'react';
import {Context} from '../../../Context.js';
import useUpdateWallQuoteState from '../../../functions/DOMFunctions/useUpdateWallQuoteState.js';

function BoldFont ({parentToChild}) {
  const {edit} = useContext(Context);
  const [boldFont, setBoldFont] = edit.boldF;
  const {config, index} = parentToChild;
  const updateWallQuoteState = useUpdateWallQuoteState();
  let boldBGColor = config.imgBG;
  let boldTxtColor = config.colorNum;

  if (config.boldF === 'bold') {
    boldBGColor = config.colorNum;
    boldTxtColor = config.imgBG;
  };

  const handleBoldFont = () => {
    if (config._id === 'This was called by QuoteBox') {
      if (config.boldF === 'normal') return setBoldFont('bold');
      setBoldFont('normal');
    } else {
      let auxValue = 'normal';
      if (config.boldF === 'normal') auxValue = 'bold';
      updateWallQuoteState(index, auxValue, 'boldF');
    };
  };

  return (
    <button
      className={`editBtn fFam BG-color${boldBGColor} text-color${boldTxtColor}`}
      style={{fontWeight: 'bold'}}
      onClick={handleBoldFont}
    >B</button>
  );
};

export default BoldFont;