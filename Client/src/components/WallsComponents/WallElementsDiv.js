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
    <div className={`boxContainer BG-color${imgBGColor}`}>
      {wall === 'wall/saved'
        ? <div>
            <h1>This are your saved quotes</h1>
            <ReverseQuotesBtn />
          </div>
        : <h1>Search in our database</h1>
      }
      <SearchInput parentToChild={parentToChild} />
      <SearchBarBtn parentToChild={parentToChild} />
    </div>

  );
};

export default WallElementsDiv;