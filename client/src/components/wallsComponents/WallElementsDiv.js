import React, {useContext} from 'react';
import {Context} from '../../Context.js';
import ReverseQuotesBtn from '../savedWall/ReverseQuotesBtn.js';
import SearchBarBtn from './SearchBarBtn.js';
import SearchInput from './SearchInput.js';

function WallElementsDiv ({parentToChild}) {
  const {colors} = useContext(Context);
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const {wall} = parentToChild;

  return (
    <div className={`wallElementsContainer BG-color${imgBGColor}`}>
      {wall === 'wall/saved'
        ? <h1>This are your saved quotes</h1>
        : <h1>Search in our database</h1>
      }
      <div className={'flexDiv'}>
        {wall === 'wall/saved' && <ReverseQuotesBtn />}
        <SearchInput parentToChild={parentToChild} />
        <SearchBarBtn parentToChild={parentToChild} />
      </div>
    </div>

  );
};

export default WallElementsDiv;