import React, {useContext, useEffect} from 'react';
import {Context} from '../../Context.js';
import useDebounceSearchResults from '../../functions/quoteFunctions/useDebounceSearchResults.js';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function SearchBarBtn({parentToChild}) {
  const {colors, forms} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const searchValue = forms.search;
  const {wall} = parentToChild;
  const debounceSearchResults = useDebounceSearchResults();

  //handle unmount
  useEffect(() => {
    return () => searchValue.current = '';
  }, []);

  const handleSearchBarBtn = () => {
    debounceSearchResults(searchValue.current, wall);
  };

  return (
    <FontAwesomeIcon
      className={`clipBtn BG-color${colorNumber} text-color${imgBGColor}`}
      onClick={handleSearchBarBtn}
      icon='search' />
  );
};

export default SearchBarBtn;