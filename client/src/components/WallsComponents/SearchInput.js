import React, {useContext, useEffect} from 'react';
import {Context} from '../../Context.js';
import useDebounceSearchResults from '../../functions/quoteFunctions/useDebounceSearchResults.js';
import useGetSavedSearch from '../../functions/quoteFunctions/useGetSavedSearch.js';

function SearchInput ({parentToChild}) {
  const {colors, forms} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const searchValue = forms.search;
  const {wall} = parentToChild;
  const debounceSearchResults = useDebounceSearchResults();
  const getSavedSearch = useGetSavedSearch();
  let placeholder = 'Search in our database...'
  let wallClass = 'searchWall'
  if (wall === 'wall/saved') {
    placeholder = 'Search in your quotes...';
    wallClass = 'savedWall';
  };

  // handle unmount
  useEffect(() => {
    if (wall === 'wall/saved') return () => getSavedSearch('');
  }, []);

  const handleSearchInput = (event) => {
    searchValue.current = event.target.value.trim();
    debounceSearchResults(event.target.value.trim(), wall);
  };

  const handleEnterSearchInput = (event) => {
    if (event.key !== 'Enter') return;
    debounceSearchResults(event.target.value.trim(), wall);
  };

  return (
    <input
      type='text'
      placeholder={placeholder}
      className={`inputs ${wallClass}Input BG-color${imgBGColor} text-color${colorNumber}`}
      onChange={handleSearchInput}
      onKeyUp={handleEnterSearchInput}
    />
  );
};

export default SearchInput;