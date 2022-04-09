import React from 'react';
import WallSharingBtn from '../Sharing/WallSharingBtn.js';
import WallEditBtn from '../Edit/WallEditBtn.js';
import WallDeleteBtn from '../Delete/WallDeleteBtn.js';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import SearchSaveQuoteBtn from '../../SearchWall/SearchSaveQuoteBtn.js';

function StartingWallComponents({parentToChild}) {
  const {config, wall} = parentToChild;
  const epochTime = parseInt(config._id.substring(0, 8), 16);
  const savedDate = new Date(epochTime*1000).toLocaleDateString();
  const savedDateTime = new Date(epochTime*1000).toLocaleTimeString();

  return (
    <div>
      <WallSharingBtn parentToChild={parentToChild} />
      <WallEditBtn parentToChild={parentToChild} />
      <WallDeleteBtn parentToChild={parentToChild} />
      {wall === 'savedWall'
        ? <p className={`text-color${config.colorNum}`}>
            <FontAwesomeIcon className={`quoteIcon`} icon='globe-americas' /> 
            {` ${savedDate}`} at {savedDateTime}
          </p>
        : <SearchSaveQuoteBtn parentToChild={parentToChild} />
      }
    </div>
  );
};

export default StartingWallComponents;