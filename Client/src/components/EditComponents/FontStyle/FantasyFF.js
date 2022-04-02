import React, {useContext} from 'react';
import {Context} from '../../../Context.js';
import useUpdateWallQuoteState from '../../../functions/DOMFunctions/useUpdateWallQuoteState.js';

function FantasyFF ({parentToChild}) {
  const {edit} = useContext(Context);
  const [fontFam, setFontFam] = edit.fontF;
  const {config, index} = parentToChild;
  const updateWallQuoteState = useUpdateWallQuoteState();
  const font = 'Copperplate, Papyrus, fantasy';
  let fantasyBGColor = config.imgBG;
  let fantasyTxtColor = config.colorNum;

  if (config.fontF === font) {
    fantasyBGColor = config.colorNum;
    fantasyTxtColor = config.imgBG;
  };

  const handleFantasyFF = () => {
    if (config._id === 'This was called by QuoteBox') {
      setFontFam(font);
    } else {
      updateWallQuoteState(index, font, 'fontF');
    };
  };

  return (
    <label>
      <button
        className={`editBtn fFam BG-color${fantasyBGColor} text-color${fantasyTxtColor}`}
        style={{fontFamily: font}}
        onClick={handleFantasyFF}
      ><div id='fantasyBtn'>Aa</div></button>
    </label>
  );
};

export default FantasyFF;