import {useContext} from 'react';
import {Context} from '../../Context.js';

function useSetInitialOptions () {
  const {colors, edit} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const [autoColorChange, setAutoColorChange] = colors.auto;
  const [restartDefaultObj, setRestartDefaultObj] = edit.auto;
  const [fontFam, setFontFam] = edit.fontF;
  const [boldFont, setBoldFont] = edit.boldF;
  const [italicFont, setItalicFont] = edit.italicF;
  const [upperFont, setUpperFont] = edit.upperF;
  const [fSize, setFSize] = edit.fontS;
    
  const setInitialOptions = function setTheInitialOptions () {
    setRestartDefaultObj(true);
    setAutoColorChange(true);
    setColorNumber(0);
    setImgBGColor(7);
    setFontFam('Arial, Helvetica, sans-serif');
    setBoldFont('normal');
    setItalicFont('normal');
    setUpperFont('none');
    setFSize(35);    
  };  
  return setInitialOptions;
};

export default useSetInitialOptions;