import React, {useContext, useEffect} from 'react';
import {Context} from './Context.js';
import {Routes, Route, useLocation} from 'react-router-dom';
import AppRouter from './AppRouter.js';
import useRedirectTo from './functions/useRedirectTo.js';
import './styles/App.scss';
import './styles/colorChange.scss';

function App() {
  const {colors, refs, timers} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [currentPath, setCurrentPath] = refs.path;
  const [sendEmailBtnTimer, setSendEmailBtnTimer] = timers.send;
  const [sendEmailInterval, setSendEmailInterval] = timers.sendInt;
  const [sendWaitMsg, setSendWaitMsg] = timers.sendWait;
  const [checkCodeBtnTimer, setCheckCodeBtnTimer] = timers.check;
  const [checkCodeInterval, setCheckCodeInterval] = timers.codeInt;
  const [checkWaitMsg, setCheckWaitMsg] = timers.sendWait;
  const redirectTo = useRedirectTo();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== currentPath) {
      redirectTo('/box/app');
    };  
  }, [location.pathname]);

  //This needs to be up here in order to count and end properly when component is unmounted
  useEffect(() => {  
    if (sendEmailBtnTimer > 0 && sendEmailInterval === 'Interval is off') {
      setSendEmailInterval(setInterval(() => {
        setSendEmailBtnTimer(sendEmailBtnTimer => sendEmailBtnTimer - 1);
      }, 1000));
    } else if (sendEmailBtnTimer <= 0) {
      setSendWaitMsg(false);
      clearInterval(sendEmailInterval);
      setSendEmailInterval('Interval is off');
    };
  }, [sendEmailBtnTimer]);

  //This needs to be up here in order to count and end properly when component is unmounted
  useEffect(() => {  
    if (checkCodeBtnTimer > 0 && checkCodeInterval === 'Interval is off') {
      setCheckCodeInterval(setInterval(() => {
        setCheckCodeBtnTimer(checkCodeBtnTimer => checkCodeBtnTimer - 1);
      }, 1000));
    } else if (checkCodeBtnTimer <= 0) {
      setCheckWaitMsg(false);
      clearInterval(checkCodeInterval);
      setCheckCodeInterval('Interval is off');
    };
  }, [checkCodeBtnTimer]);

  return (
    <div className={`App BG-color${colorNumber}`}>
      <Routes>
        <Route path='*' element={<AppRouter />} />      
      </Routes>
    </div>
  );
};

export default App;
