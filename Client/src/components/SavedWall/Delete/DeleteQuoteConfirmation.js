import React from 'react';
import CancelDeleteBtn from './CancelDeleteBtn.js';
import ConfirmDeleteBtn from './ConfirmDeleteBtn.js';

function DeleteQuoteConfirmation ({parentToChild}) {
  const {config} = parentToChild;

  return (
    <div className={`BG-color${config.imgBG} text-color${config.colorNum}`}>
      <h3 className={`shareIt`} >Are you sure you want to delete this quote?</h3>
      <CancelDeleteBtn parentToChild={parentToChild} />
      <ConfirmDeleteBtn parentToChild={parentToChild} />
    </div>    
  );
};

export default DeleteQuoteConfirmation;