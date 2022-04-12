import React from 'react';
import WallCancelDeleteBtn from './WallCancelDeleteBtn.js';
import WallConfirmDeleteBtn from './WallConfirmDeleteBtn.js';

function WallDeleteConfirmation ({parentToChild}) {
  const {config} = parentToChild;

  return (
    <div className={`BG-color${config.imgBG} text-color${config.colorNum}`}>
      <h3 className={`shareIt`} >Are you sure you want to delete this quote?</h3>
      <WallCancelDeleteBtn parentToChild={parentToChild} />
      <WallConfirmDeleteBtn parentToChild={parentToChild} />
    </div>
  );
};

export default WallDeleteConfirmation;