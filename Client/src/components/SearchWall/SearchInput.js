import React, {useContext} from 'react';
import {Context} from '../../Context.js';
import useDebounceSearchResults from '../../functions/quoteFunctions/useDebounceSearchResults.js';

function SearchInput ({parentToChild}) {
  const {colors, forms} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const [searchValue, setSearchValue] = forms.search;
  const debounceSearchResults = useDebounceSearchResults();

  const handleSearchInput = (event) => {
    setSearchValue(event.target.value);
    debounceSearchResults(event.target.value);
  };

  return (
    <input
      type='text'
      placeholder='Search...'
      className={`NQbtn BG-color${colorNumber} text-color${imgBGColor}`}
      onChange={handleSearchInput}
    />
  );
};

export default SearchInput;