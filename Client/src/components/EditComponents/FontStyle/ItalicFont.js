import React, {useContext} from 'react';
import {Context} from '../../../Context.js';
import useUpdateWallQuoteState from '../../../functions/DOMFunctions/useUpdateWallQuoteState.js';

function ItalicFont ({parentToChild}) {
  const {edit} = useContext(Context);
  const [italicFont, setItalicFont] = edit.italicF;
  const {config, index} = parentToChild;
  const updateWallQuoteState = useUpdateWallQuoteState();
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
      let auxValue = 'normal';
      if (config.italicF === 'normal') auxValue = 'italic';
      updateWallQuoteState(index, auxValue, 'italicF');
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