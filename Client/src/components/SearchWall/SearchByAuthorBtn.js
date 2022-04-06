import React, {useContext} from 'react';
import {Context} from '../../Context.js';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function SearchByAuthorBtn () {
  const {colors, refs} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const [searchByAuthor, setSearchByAuthor] = refs.byAuthor;
  const [searchByQuote, setSearchByQuote] = refs.byQuote;
  
  const handleSearchByAuthorBtn = () => {
    if (searchByQuote === true) setSearchByAuthor(!searchByAuthor);
  };

  return (
    <div>
      {searchByAuthor === true
        ? <FontAwesomeIcon
            className={`clipBtn BG-color${colorNumber} text-color${imgBGColor}`}
            onClick={handleSearchByAuthorBtn}
            icon='check' />
        : <FontAwesomeIcon
            className={`clipBtn BG-color${colorNumber} text-color${imgBGColor}`}
            onClick={handleSearchByAuthorBtn}
            icon='times' />
      }
    </div>
  );
};

export default SearchByAuthorBtn;