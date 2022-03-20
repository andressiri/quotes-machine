import React, {useContext, useEffect} from 'react';
import {Context} from './Context.js';
import {Routes, Route, useLocation} from 'react-router-dom';
import useRedirectTo from './functions/useRedirectTo.js';
import QuoteBox from './components/QuoteBox.js';
import './styles/App.scss';
import './styles/colorChange.scss';

function App() {
  const {colors, refs} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [currentPath, setCurrentPath] = refs.path;
  const redirectTo = useRedirectTo();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== currentPath) {
      redirectTo('/');
    };  
  }, [location.pathname]);

  return (
    <div className={`App BG-color${colorNumber}`}>
      <Routes>
        <Route path='*' element={<QuoteBox />} />      
      </Routes>
    </div>
  );
};

export default App;
