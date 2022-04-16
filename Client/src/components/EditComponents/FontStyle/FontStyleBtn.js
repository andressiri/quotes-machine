import React, {useContext} from 'react';
import {Context} from '../../../Context.js';
import useUpdateWallQuoteState from '../../../functions/DOMFunctions/useUpdateWallQuoteState.js';

function FontStyleBtn ({parentToChild}) {
  const {edit} = useContext(Context);
  const [boldFont, setBoldFont] = edit.boldF;
  const [italicFont, setItalicFont] = edit.italicF;
  const [upperFont, setUpperFont] = edit.upperF;
  const {config, index, wall, style, styleValue, notStyled, btnText} = parentToChild;
  const updateWallQuoteState = useUpdateWallQuoteState();
  let styleBGColor = config.imgBG;
  let styleTxtColor = config.colorNum;  
  let styleObj = {};
  if (style === 'boldF') styleObj = {fontWeight: 'bold'};
  if (style === 'italicF') styleObj = {fontStyle: 'italic'};

  if (config[style] === styleValue) {
    styleBGColor = config.colorNum;
    styleTxtColor = config.imgBG;
  };

  const handleFontStyleBtn = () => {
    if (config._id === 'This was called by QuoteBox') {
      if (config[style] === notStyled) {
        switch (style) {
          case 'boldF': return setBoldFont(styleValue);
          case 'italicF': return setItalicFont(styleValue);
          case 'upperF': return setUpperFont(styleValue);
          // no default
        };
      };
      switch (style) {
        case 'boldF': return setBoldFont(notStyled);
        case 'italicF': return setItalicFont(notStyled);
        case 'upperF': return setUpperFont(notStyled);
        // no default
      };
    } else {
      let auxValue = notStyled;
      if (config[style] === notStyled) auxValue = styleValue;
      updateWallQuoteState(index, auxValue, style, wall);
    };
  };

  return (
    <button
      className={`editBtn fFam BG-color${styleBGColor} text-color${styleTxtColor}`}
      style={styleObj}
      onClick={handleFontStyleBtn}
    >{btnText}</button>
  );
};

export default FontStyleBtn;