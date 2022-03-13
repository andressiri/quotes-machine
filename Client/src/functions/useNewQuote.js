import {useContext} from 'react';
import {Context} from '../Context.js';
import useGalleryItem from './useGalleryItem.js';
import changeColorNumber from './changeColorNumber.js';
import fetchRandomQuote from './fetchRandomQuote.js';
import setBackground from './setBackground.js';

function useNewQuote () {
  const {colors, quote, gall} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const [quoteText, setQuoteText] = quote.quoteTxt;  
  const [author, setAuthor] = quote.auth;
  const [fadeQuote, setFadeQuote] = quote.fadQ;
  const [gallArray, setGallArray] = gall.gallA;
  const [gallChosse, setGallChoose] = gall.gallCh;
  const galleryItem = useGalleryItem();
    
  const newQuote = async function getQuoteAndChangeColors () {    
    setFadeQuote('Out');
    let quoteObj = await fetchRandomQuote();
    setColorNumber(colorNumber => changeColorNumber(colorNumber));
    setImgBGColor(setBackground(colorNumber));
    //await new Promise(resolve => setTimeout(resolve, 250));
    setQuoteText(quoteObj.content);
    setAuthor(quoteObj.author);
    galleryItem(quoteObj.content, quoteObj.author);
    setGallChoose(gallArray.length - 1);
    setFadeQuote('In');
  };
  return newQuote;
}

export default useNewQuote;