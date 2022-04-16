import React, {useContext} from 'react';
import {Context} from '../../../Context.js';
import useUpdateWallQuoteState from '../../../functions/DOMFunctions/useUpdateWallQuoteState.js';

function FontFamilyBtn ({parentToChild}) {
  const {edit} = useContext(Context);
  const [fontFam, setFontFam] = edit.fontF;
  const {config, index, wall, font, id} = parentToChild;
  const updateWallQuoteState = useUpdateWallQuoteState();
  let BtnBGColor = config.imgBG;
  let BtnTxtColor = config.colorNum;

  if (config.fontF === font) {
    BtnBGColor = config.colorNum;
    BtnTxtColor = config.imgBG;
  };

  const handleFontFamilyBtn = () => {
    if (config._id === 'This was called by QuoteBox') {
      setFontFam(font);
    } else {
      updateWallQuoteState(index, font, 'fontF', wall);
    };
  };

  return (
    <label>
      <button
        className={`editBtn fFam BG-color${BtnBGColor} text-color${BtnTxtColor}`}
        style={{fontFamily: font}}
        onClick={handleFontFamilyBtn}
      ><div id={id}>Aa</div></button>
    </label>
  );
};

export default FontFamilyBtn;