import {useContext} from 'react';
import {Context} from '../../Context.js';

function useSearchCancelEdition () {
  const {quote} = useContext(Context);
  const searchArray = quote.search;
  const searchBackup = quote.searchBUp;
    
  const searchCancelEdition = async (index) => {
    let auxObj = await JSON.parse(JSON.stringify(searchBackup.current[index]));
    searchArray.current[index] = auxObj;
  };
  return searchCancelEdition;
};

export default useSearchCancelEdition;