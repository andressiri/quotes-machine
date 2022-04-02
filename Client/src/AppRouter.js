import React, {useContext} from 'react';
import {Context} from './Context.js';
import {Routes, Route} from 'react-router-dom';
import QuoteBox from './Components/QuoteBox/QuoteBox.js';
import SavedWall from './Components/SavedWall/SavedWall.js';

function AppRouter() {
  const {colors, fade} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [fadeWall, setFadeWall] = fade.fadW;

  return (
    <div className={`App fadeWall${fadeWall}`}>
      <div className={`BG-color${colorNumber}`}>
        <Routes>
          <Route path='/box/*' exact element={<QuoteBox />} />
          <Route path='/wall/*' exact element={<SavedWall />} />
        </Routes>
      </div>
    </div>
  );
};

export default AppRouter;