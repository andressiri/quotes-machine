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
    <div className={'flexDiv'}>
      {wall === 'wall/saved'
        ? <div className={'flexDiv'}>
            <div>
              <WallSharingBtn parentToChild={parentToChild} />
              <WallEditBtn parentToChild={parentToChild} />
              <WallDeleteBtn parentToChild={parentToChild} />
              <FavoriteQuoteBtn parentToChild={parentToChild} />
            </div>
            <h3 className={`text-color${config.colorNum}`} style={{margin: 'var(--reference)'}}>
              {`${savedDate} ${savedDateTime} `} 
              <FontAwesomeIcon icon='globe-americas' />
            </h3>
          </div>
        : <div>
            <WallSharingBtn parentToChild={parentToChild} />
            <WallEditBtn parentToChild={parentToChild} />
            <WallDeleteBtn parentToChild={parentToChild} />
            <SearchSaveQuoteBtn parentToChild={parentToChild} />
          </div>
      }
    </div>
  );
};

export default StartingWallComponents;