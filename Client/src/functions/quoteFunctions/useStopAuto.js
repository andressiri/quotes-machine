import {useContext} from 'react';
import {Context} from '../../Context.js';

function useStopAuto() {
  const {auto} = useContext(Context);
  const [handleAuto, setHandleAuto] = auto.hAuto;
  const [autoClass, setAutoClass] = auto.aClass;
  const [autoTimer, setAutoTimer] = auto.timer;
  
  const stopAuto = () => {
    if (handleAuto !== 'Interval is off') {
      setAutoClass(false); 
      clearInterval(handleAuto);
      setHandleAuto('Interval is off');
      clearInterval(autoTimer);
      setAutoTimer('Interval is off');
    };
  };
  return stopAuto;
};

export default useStopAuto;