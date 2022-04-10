import React, {useContext} from 'react';
import {Context} from '../../Context.js';

function CustomTabBtn () {
  const {colors, refs, force} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const customTab = refs.customT;
  const favoriteTab = refs.favoriteT;
  const [forceUpdate, setForceUpdate] = force.update;

  const handleCustomTabBtn = () => {
    customTab.current = true;
    favoriteTab.current = false;
    setForceUpdate(forceUpdate => forceUpdate + 1);
  };

  return (
    <button
      className={`NQbtn BG-color${colorNumber} text-color${imgBGColor}`}
      onClick={handleCustomTabBtn}
    >Made by me</button>
  );
};

export default CustomTabBtn;