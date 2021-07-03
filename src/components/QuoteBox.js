import React, {useContext} from 'react';
import {Context} from '../Context.js';
import GroupOneRQ from './GroupOneComponents/RandomQuotes/GroupOneRQ.js';
import Quote from './Quote.js';
import ShareCancel from './ShareCancel.js';
import GroupOneSharing from './GroupOneComponents/Sharing/GroupOneSharing.js';
import GroupTwo from './GroupTwoComponents/GroupTwo.js';
import GroupThree from './GroupThreeComponents/GroupThree.js';
import GroupFour from './GroupFourComponents/GroupFour.js';
import './../styles/QuoteBox.scss';
import './../styles/RandomColor.scss';

function QuoteBox() {
  const {colors, quote, auto, groups, refs} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [hideGroupOne, setHideGroupOne] = groups.gOne;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  
  return (
    <div id="quote-box" className={`quoteBox BG-color${imgBGColor}`}>
      <GroupOneRQ />
      <Quote />      
      <br></br>
      <h3 className={`hide${hideGroupOne} text-color${colorNumber}`} >Share it</h3>
      <GroupOneSharing />
      <br></br>
      <GroupTwo />
      <GroupThree />
      <GroupFour />
      <ShareCancel />
    </div>
  );
}

export default QuoteBox;