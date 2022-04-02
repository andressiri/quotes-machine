import {useContext} from 'react';
import {Context} from './../Context.js';

function useCreateOptionsObj () {
  const {colors, edit} = useContext(Context);
  const [autoColorChange, setAutoColorChange] = colors.auto;
  const [restartDefaultObj, setRestartDefaultObj] = edit.auto;
    
  const createOptionsObj = (parentObject) => {
    const auxObj = {
      restartAfterShare: restartDefaultObj,
      automaticColor: autoColorChange,
      quoteConfig: {
        colorNum: parentObject.colorNum,
        imgBG: parentObject.imgBG,
        fontF: parentObject.fontF,
        boldF: parentObject.boldF,
        italicF: parentObject.italicF,
        upperF: parentObject.upperF,
        fontS: parentObject.fontS
      }
    };
    return auxObj;
  };
  return createOptionsObj;
};

export default useCreateOptionsObj;