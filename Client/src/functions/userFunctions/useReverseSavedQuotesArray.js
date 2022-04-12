import {useContext} from 'react';
import {Context} from '../../Context.js';

function useReverseSavedQuotesArray () {
  const {quote, refs, force} = useContext(Context);
  const savedQuotesArray = quote.saved;
  const savedQuotesBackup = quote.savedBUp;
  const customQuotesArray = refs.customA;
  const favoriteQuotesArray = refs.favoriteA;
  const [forceUpdate, setForceUpdate] = force.update;
  const wallItemsShowed = refs.wallItems;  

  const reverseSavedQuotesArray = async () => {
    savedQuotesArray.current = savedQuotesArray.current.reverse();
    customQuotesArray.current = customQuotesArray.current.reverse();
    favoriteQuotesArray.current = favoriteQuotesArray.current.reverse();
    savedQuotesBackup.current = savedQuotesBackup.current.reverse();
    wallItemsShowed.current = 10;
    setForceUpdate(forceUpdate => forceUpdate + 1);
 };
  return reverseSavedQuotesArray;
};

export default useReverseSavedQuotesArray;