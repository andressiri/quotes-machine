import React, {useContext} from 'react';
import {Context} from './Context.js';
import {Routes, Route} from 'react-router-dom';
import QuoteBox from './components/QuoteBox/QuoteBox.js';
import SavedWall from './components/SavedWall/SavedWall.js';

function AppRouter() {
  const {colors} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  
  return (
    <div className={`App BG-color${colorNumber}`}>
      <Routes>
        <Route path='/box/*' exact element={<QuoteBox />} />             
        <Route path='/wall/*' exact element={<SavedWall />} />             
      </Routes>
    </div>
  );
};

export default AppRouter;