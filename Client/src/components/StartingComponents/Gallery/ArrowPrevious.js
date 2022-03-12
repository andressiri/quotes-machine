import React, {useContext} from 'react';
import {Context} from './../../../Context.js';
import useStopAuto from '../../../functions/useStopAuto.js';

function ArrowPrevious () {
  const {colors, quote, auto, groups, refs, custom, gall} = useContext(Context);
  const [gallArray, setGallArray] = gall.gallA;
  const [gallChoose, setGallChoose] = gall.gallCh;
  let disablePrevious = 'gallDisabled';
  const stopAuto = useStopAuto();

  if (gallArray.length >= 2) {
    disablePrevious = '';
  };

  function handleArrowPrevious () {
    stopAuto(); 
    if (gallChoose == 0) {
      setGallChoose(gallArray.length - 1);
    } else {
      setGallChoose(gallChoose - 1);
    };
  };

  return (
    <h1 className={`gallArrowPrevious ${disablePrevious}`} onClick={handleArrowPrevious} >&lt;</h1>
  );
};

export default ArrowPrevious;