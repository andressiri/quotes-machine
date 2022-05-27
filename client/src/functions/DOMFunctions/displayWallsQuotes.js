import WallQuote from '../../components/wallsComponents/WallQuote.js';
import WallRouter from '../../components/wallsComponents/WallRouter.js';
import WallQuoteDeleted from '../../components/wallsComponents/delete/WallQuoteDeleted.js';

const displayWallsQuotes = (arrayDontExists, dontExistsMsg, arrayToDisplay, numberOfQuotes, wall, imgBGColor, colorNumber) => {
  if (arrayDontExists) return [
    <div className={`wallMessageDiv BG-color${imgBGColor} text-color${colorNumber}`} key={'dontExists'}>
      <h2 key={'dontExists'}>
        {dontExistsMsg}
      </h2>
    </div>
  ];
  
  if (typeof arrayToDisplay[0] !== 'object') return [
    <div className={`wallMessageDiv BG-color${imgBGColor} text-color${colorNumber}`} key={'message'}>
      <h2 key={'message'} >
        {arrayToDisplay[0]}
      </h2>
    </div>
  ];

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
        <div className={'wallQuoteDiv'} id={divId} key={quoteObj._id}>
          <div className={`wallQuoteCap BG-color${quoteObj.imgBG} text-color${quoteObj.colorNum}`}></div>
          <WallQuote key={`2${quoteObj._id}`} parentToChild={parentToChildObj} />
          <WallRouter key={`3${quoteObj._id}`} parentToChild={parentToChildObj} />
        </div>);
    } else {
      return(<WallQuoteDeleted id={divId} key={`4${quoteObj._id}`} parentToChild={parentToChildObj}/>);
    };
  });
  return arrayToReturn;
};

export default displayWallsQuotes;