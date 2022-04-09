import {useContext} from 'react';
import {Context} from '../../Context.js';

function useSavedCancelEdition () {
  const {quote} = useContext(Context);
  const savedQuotesArray = quote.saved;
  const savedQuotesBackup = quote.savedBUp;
    
  const savedCancelEdition = async (index) => {
    let auxObj = await JSON.parse(JSON.stringify(savedQuotesBackup.current[index]));
    savedQuotesArray.current[index] = auxObj;
  };
  return savedCancelEdition;
};

export default useSavedCancelEdition;