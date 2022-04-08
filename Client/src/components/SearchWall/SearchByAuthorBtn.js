import React, {useContext} from 'react';
import {Context} from '../../Context.js';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import useDebounceSearchResults from '../../functions/quoteFunctions/useDebounceSearchResults.js';

function SearchByAuthorBtn () {
  const {colors, refs, forms} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const [searchByAuthor, setSearchByAuthor] = refs.byAuthor;
  const [searchByQuote, setSearchByQuote] = refs.byQuote;
  const [searchValue, setSearchValue] = forms.search;
  const debounceSearchResults = useDebounceSearchResults();
  
  const handleSearchByAuthorBtn = () => {
    if (searchByQuote === false) return;
    setSearchByAuthor(!searchByAuthor);
    debounceSearchResults(searchValue);
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