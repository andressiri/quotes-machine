import React, {useContext} from 'react';
import {Context} from '../../Context.js';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function SearchByQuoteBtn () {
  const {colors, refs} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const [searchByQuote, setSearchByQuote] = refs.byQuote;
  const [searchByAuthor, setSearchByAuthor] = refs.byAuthor;
  
  const handleSearchByQuoteBtn = () => {
    if (searchByAuthor === true) setSearchByQuote(!searchByQuote);
  };

  return (
    <div>
      {searchByQuote === true
        ? <FontAwesomeIcon
            className={`clipBtn BG-color${colorNumber} text-color${imgBGColor}`}
            onClick={handleSearchByQuoteBtn}
            icon='check' />
        : <FontAwesomeIcon
            className={`clipBtn BG-color${colorNumber} text-color${imgBGColor}`}
            onClick={handleSearchByQuoteBtn}
            icon='times' />
      }
    </div>
  );
};

export default SearchByQuoteBtn;