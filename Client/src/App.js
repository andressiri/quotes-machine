import React, {useContext, useEffect} from 'react';
import {Context} from './Context.js';
import {Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import QuoteBox from './components/QuoteBox.js';
import './styles/App.scss';
import './styles/colorChange.scss';

function App() {
  const {colors, refs} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [currentPath, setCurrentPath] = refs.path;
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== currentPath) {
      setCurrentPath('/');
      navigate('/');
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
