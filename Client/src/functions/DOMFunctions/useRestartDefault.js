import {useContext} from 'react';
import {Context} from '../../Context.js';

function useRestartDefault () {
  const {colors, edit} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const [fontFam, setFontFam] = edit.fontF;
  const [boldFont, setBoldFont] = edit.boldF;
  const [italicFont, setItalicFont] = edit.italicF;
  const [upperFont, setUpperFont] = edit.upperF;
  const [fSize, setFSize] = edit.fontS;
  const [configBackup, setConfigBackup] = edit.cBackup; 
    
  const restartDefault = function resetConfig () {
    setColorNumber(configBackup.colorNum);
    setImgBGColor(configBackup.imgBG);
    setFontFam(configBackup.fontF);
    setBoldFont(configBackup.boldF);
    setItalicFont(configBackup.italicF);
    setUpperFont(configBackup.upperF);
    setFSize(configBackup.fontS);
  };  
  return restartDefault;
};

export default useRestartDefault;