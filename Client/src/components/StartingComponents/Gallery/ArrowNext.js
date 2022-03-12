import React, {useContext} from 'react';
import {Context} from './../../../Context.js';
import useStopAuto from '../../../functions/useStopAuto.js';

function ArrowNext () {
  const {colors, quote, auto, groups, refs, custom, gall} = useContext(Context);
  const [gallArray, setGallArray] = gall.gallA;
  const [gallChoose, setGallChoose] = gall.gallCh;
  let disableNext = 'gallDisabled';
  const stopAuto = useStopAuto();

  if (gallArray.length >= 2) {
    disableNext = '';
  };

  function handleArrowNext () {
    stopAuto(); 
    if (gallChoose >= gallArray.length - 1) {
      setGallChoose(0);
    } else {
      setGallChoose(gallChoose + 1);
    };
  };

  return (
    <h1 className={`gallArrowNext ${disableNext}`} onClick={handleArrowNext} >&gt;</h1>
  );
};

export default ArrowNext;