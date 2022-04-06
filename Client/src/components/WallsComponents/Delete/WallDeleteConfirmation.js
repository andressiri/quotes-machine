import React from 'react';
import WallCancelDeleteBtn from './WallCancelDeleteBtn.js';
import SavedConfirmDeleteBtn from '../../SavedWall/SavedConfirmDeleteBtn.js';
import SearchConfirmDeleteBtn from '../../SearchWall/SearchConfirmDeleteBtn.js';

function WallDeleteConfirmation ({parentToChild}) {
  const {config, wall} = parentToChild;

  return (
    <div className={`BG-color${config.imgBG} text-color${config.colorNum}`}>
      <h3 className={`shareIt`} >Are you sure you want to delete this quote?</h3>
      <WallCancelDeleteBtn parentToChild={parentToChild} />
      {wall === 'savedWall'
        ? <SavedConfirmDeleteBtn parentToChild={parentToChild} />
        : <ShareConfirmDeleteBtn parentToChild={parentToChild} />}
    </div>
  );
};

export default WallDeleteConfirmation;