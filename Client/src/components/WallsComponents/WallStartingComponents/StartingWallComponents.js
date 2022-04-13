import React from 'react';
import WallSharingBtn from './WallSharingBtn.js';
import WallEditBtn from './WallEditBtn.js';
import WallDeleteBtn from './WallDeleteBtn.js';
import SearchSaveQuoteBtn from '../../searchWall/SearchSaveQuoteBtn.js';
import FavoriteQuoteBtn from '../../savedWall/FavoriteQuoteBtn.js';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

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
      {wall === 'wall/saved'
        ? <div>
            <p className={`text-color${config.colorNum}`}>
              <FontAwesomeIcon className={`quoteIcon`} icon='globe-americas' /> 
              {` ${savedDate}`} at {savedDateTime}
            </p>
            <FavoriteQuoteBtn parentToChild={parentToChild} />
          </div>
        : <SearchSaveQuoteBtn parentToChild={parentToChild} />
      }
    </div>
  );
};

export default StartingWallComponents;