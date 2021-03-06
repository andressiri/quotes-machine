import {useContext} from "react";
import { Context } from "../Context.js";

function useStopAuto() {   
  const {colors, quote, auto, groups, refs} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const [handleAuto, setHandleAuto] = auto.hAuto;
  const [autoClass, setAutoClass] = auto.aClass;
  
  const stopAuto = function useHandleClick() {
    if (handleAuto !== 'Interval is off') {
      setAutoClass(false); 
      clearInterval(handleAuto);
      setHandleAuto('Interval is off');    
    }
  }
  return stopAuto;
} 

export default useStopAuto;