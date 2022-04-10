import React, {useContext} from 'react';
import {Context} from '../../Context.js';

function AllSearchedTabBtn () {
  const {colors, refs, force} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const byQuoteTab = refs.byQTab;
  const byAuthorTab = refs.byATab;
  const [forceUpdate, setForceUpdate] = force.update;

  const handleAllSearchedTabBtn = () => {
    byQuoteTab.current = false;
    byAuthorTab.current = false;
    setForceUpdate(forceUpdate => forceUpdate + 1);
  };

  return (
    <button
      className={`NQbtn BG-color${colorNumber} text-color${imgBGColor}`}
      onClick={handleAllSearchedTabBtn}
    >All Results</button>
  );
};

export default AllSearchedTabBtn;