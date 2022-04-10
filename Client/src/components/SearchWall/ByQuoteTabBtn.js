import React, {useContext} from 'react';
import {Context} from '../../Context.js';

function ByQuoteTabBtn () {
  const {colors, refs, force} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const byQuoteTab = refs.byQTab;
  const byAuthorTab = refs.byATab;
  const [forceUpdate, setForceUpdate] = force.update;

  const handleByQuoteTabBtn = () => {
    byQuoteTab.current = true;
    byAuthorTab.current = false;
    setForceUpdate(forceUpdate => forceUpdate + 1);
  };

  return (
    <button
      className={`NQbtn BG-color${colorNumber} text-color${imgBGColor}`}
      onClick={handleByQuoteTabBtn}
    >By Quote</button>
  );
};

export default ByQuoteTabBtn;