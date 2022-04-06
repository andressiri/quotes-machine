import {useContext} from 'react';
import {Context} from '../../Context.js';

function useSearchCancelEdition () {
  const {quote, force} = useContext(Context);
  const [searchArray, setSearchArray] = quote.search;
  const [searchBackup, setSearchBackup] = quote.searchBUp;
  const [forceUpdate, setForceUpdate] = force.update;
    
  const searchCancelEdition = async (index) => {
    let auxObj = await JSON.parse(JSON.stringify(searchBackup[index]));
    const auxArray = await JSON.parse(JSON.stringify(searchArray));
    auxArray[index] = auxObj;
    setSearchQuotesArray(auxArray);
    setForceUpdate(forceUpdate => forceUpdate + 1);
  };
  return searchCancelEdition;
};

export default useSearchCancelEdition;