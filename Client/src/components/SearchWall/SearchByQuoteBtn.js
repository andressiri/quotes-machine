import React, {useContext} from 'react';
import {Context} from '../../Context.js';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import useDebounceSearchResults from '../../functions/quoteFunctions/useDebounceSearchResults.js';

function SearchByQuoteBtn () {
  const {colors, refs, forms} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const [searchByQuote, setSearchByQuote] = refs.byQuote;
  const [searchByAuthor, setSearchByAuthor] = refs.byAuthor;
  const [searchValue, setSearchValue] = forms.search;
  const debounceSearchResults = useDebounceSearchResults();
  
  const handleSearchByQuoteBtn = () => {
    if (searchByAuthor === false) return;
    setSearchByQuote(!searchByQuote);
    debounceSearchResults(searchValue);
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