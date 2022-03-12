import React, {useContext} from 'react';
import {Context} from './Context.js';
import QuoteBox from './components/QuoteBox.js';
import './styles/App.scss';
import './styles/colorChange.scss';

function App() {
  const {colors} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  
  return (
    <div className={`App BG-color${colorNumber}`}>
      <QuoteBox />
    </div>
  );
};

export default App;
