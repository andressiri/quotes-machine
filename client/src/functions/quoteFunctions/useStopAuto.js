import {useContext} from 'react';
import {Context} from '../../Context.js';

function useStopAuto() {
  const {auto} = useContext(Context);
  const [handleAuto, setHandleAuto] = auto.hAuto;
  const [autoTime, setAutoTime] = auto.aTime;
  const [autoClass, setAutoClass] = auto.aClass;
  const [autoTimer, setAutoTimer] = auto.timer;
  const [autoSeconds, setAutoSeconds] = auto.sec;
  
  const stopAuto = () => {
    if (handleAuto !== 'Interval is off') {
      setAutoClass(false); 
      clearInterval(handleAuto);
      setHandleAuto('Interval is off');
      clearInterval(autoTimer);
      setAutoTimer('Interval is off');
      setAutoSeconds(autoTime/1000);
    };
  };
  return stopAuto;
};

export default useStopAuto;