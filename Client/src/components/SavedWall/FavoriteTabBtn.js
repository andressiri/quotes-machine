import React, {useContext} from 'react';
import {Context} from '../../Context.js';

function FavoriteTabBtn () {
  const {colors, refs, force} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const favoriteTab = refs.favoriteT;
  const customTab = refs.customT;
  const [forceUpdate, setForceUpdate] = force.update;

  const handleFavoriteTabBtn = () => {
    favoriteTab.current = true;
    customTab.current = false;
    setForceUpdate(forceUpdate => forceUpdate + 1);
  };

  return (
    <button
      className={`NQbtn BG-color${colorNumber} text-color${imgBGColor}`}
      onClick={handleFavoriteTabBtn}
    >Favorites</button>
  );
};

export default FavoriteTabBtn;