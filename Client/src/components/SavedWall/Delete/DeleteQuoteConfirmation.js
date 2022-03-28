import React from 'react';
import CancelDeleteBtn from './CancelDeleteBtn.js';
import ConfirmDeleteBtn from './ConfirmDeleteBtn.js';

function DeleteQuoteConfirmation ({parentToChild}) {

  return (
    <div className={`BG-color${parentToChild.config.imgBG} text-color${parentToChild.config.colorNum}`}>
      <h3 className={`shareIt`} >Are you sure you want to delete this quote?</h3>
      <CancelDeleteBtn parentToChild={parentToChild} />
      <ConfirmDeleteBtn parentToChild={parentToChild} />
    </div>    
  );
};

export default DeleteQuoteConfirmation;