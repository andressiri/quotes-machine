import {useContext} from 'react';
import {Context} from '../../Context.js';
import WallQuote from '../../Components/WallsComponents/WallQuote.js';
import WallContainer from '../../Components/WallsComponents/WallContainer.js';
import WallQuoteDeleted from '../../Components/WallsComponents/Delete/WallQuoteDeleted.js';

function useDisplayWallsQuotes () {
  const {force} = useContext(Context);
  const [forceUpdate, setForceUpdate] = force.update;
    
  const displayWallsQuotes = (arrayToDisplay, numberOfQuotes, wall) => {
    const arrayToReturn = arrayToDisplay.slice(0, numberOfQuotes).map((quoteObj, i) => {
      let parentToChildObj = {
        config: quoteObj,
        index: i,
        wall: wall
      };
      let divId = quoteObj._id;
      if (i === numberOfQuotes - 2) divId = 'quoteToObserve';
      if (quoteObj.content) { // when a quote is deleted searchedQ will be an object with the id.
        return(
          <div id={divId} key={quoteObj._id}>
            <WallQuote key={`2${quoteObj._id}`} parentToChild={parentToChildObj} />
            <WallContainer key={`3${quoteObj._id}`} parentToChild={parentToChildObj} />
          </div>);
      } else {
        return(<WallQuoteDeleted id={divId} key={`4${quoteObj._id}`} parentToChild={parentToChildObj}/>);
      };
    });
    return arrayToReturn;
  };
  return displayWallsQuotes;
};

export default useDisplayWallsQuotes;