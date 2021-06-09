import {useContext} from "react";
import { Context } from "../Context.js";

function useStopAuto() {   
  const {colorNum, quote, auth, auto, aClass} = useContext(Context);
  const [handleAuto, setHandleAuto] = auto;
  const [autoClass, setAutoClass] = aClass;
  const stopAuto = function useHandleClick() {
    if (handleAuto !== 'Interval is off') {
      setAutoClass('autoBtn btnOff BG-color'); 
      clearInterval(handleAuto);
      setHandleAuto('Interval is off');    
    }
  }
  return stopAuto;
} 

export default useStopAuto;