import WallQuote from '../../components/wallsComponents/WallQuote.js';
import WallContainer from '../../components/wallsComponents/WallContainer.js';
import WallQuoteDeleted from '../../components/wallsComponents/delete/WallQuoteDeleted.js';

const displayWallsQuotes = (arrayDontExists, dontExistsMsg, arrayToDisplay, numberOfQuotes, wall) => {
  
  if (arrayDontExists) return [<h3 key={'dontExists'} >{dontExistsMsg}</h3>];

  if (!arrayToDisplay[0]._id) return [<h3 key={'message'} >{arrayToDisplay[0]}</h3>]

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

export default displayWallsQuotes;