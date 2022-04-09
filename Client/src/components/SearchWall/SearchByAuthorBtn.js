import React, {useContext} from 'react';
import {Context} from '../../Context.js';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import useDebounceSearchResults from '../../functions/quoteFunctions/useDebounceSearchResults.js';

function SearchByAuthorBtn () {
  const {colors, refs, forms} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const searchByAuthor = refs.byAuthor;
  const searchByQuote = refs.byQuote;
  const searchValue = forms.search;
  const debounceSearchResults = useDebounceSearchResults();
  
  const handleSearchByAuthorBtn = () => {
    if (searchByQuote.current === false) return;
    searchByAuthor.current = !searchByAuthor.current;
    debounceSearchResults(searchValue.current);
  };

  return (
    <div>
      {searchByAuthor.current === true
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