import React, {useContext} from 'react';
import {Context} from '../../Context.js';

function ByAuthorTabBtn () {
  const {colors, refs, force} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const byAuthorTab = refs.byATab;
  const byQuoteTab = refs.byQTab;
  const [forceUpdate, setForceUpdate] = force.update;

  const handleByAuthorTabBtn = () => {
    byAuthorTab.current = true;
    byQuoteTab.current = false;
    setForceUpdate(forceUpdate => forceUpdate + 1);
  };

  return (
    <button
      className={`NQbtn BG-color${colorNumber} text-color${imgBGColor}`}
      onClick={handleByAuthorTabBtn}
    >By Author</button>
  );
};

export default ByAuthorTabBtn;