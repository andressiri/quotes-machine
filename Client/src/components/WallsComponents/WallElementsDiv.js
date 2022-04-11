import React, {useContext} from 'react';
import {Context} from '../../Context.js';
import ReverseQuotesBtn from '../savedWall/ReverseQuotesBtn.js';
import SearchInput from '../searchWall/SearchInput.js';

function WallElementsDiv ({parentToChild}) {
  const {colors} = useContext(Context);
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const {wall} = parentToChild;

  return (
    <div className={`routeContainer BG-color${imgBGColor}`}>
      {wall === 'savedWall'
        ? <div>
            <h1>This are your saved quotes</h1>
            <ReverseQuotesBtn />
          </div>
        : <div>
            <h1>Search in our database</h1>
            <SearchInput />
          </div>
      }
    </div>

  );
};

export default WallElementsDiv;