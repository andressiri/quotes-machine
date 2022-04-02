import {useContext} from 'react';
import {Context} from '../../Context.js';
import useNewGalleryItem from './useNewGalleryItem.js';
import changeColorNumber from '../DOMFunctions/changeColorNumber.js';
import fetchRandomQuote from './fetchRandomQuote.js';

function useNewQuote () {
  const {colors, quote, fade, gall} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const [autoColorChange, setAutoColorChange] = colors.auto;
  const [quoteText, setQuoteText] = quote.quoteTxt;  
  const [author, setAuthor] = quote.auth;
  const [fadeQuote, setFadeQuote] = fade.fadQ;
  const [gallArray, setGallArray] = gall.gallA;
  const [gallChosse, setGallChoose] = gall.gallCh;
  const newGalleryItem = useNewGalleryItem();
    
  const newQuote = async function getQuoteAndChangeColors () {     
    setFadeQuote('Out');
    let quoteObj = await fetchRandomQuote();
    if (autoColorChange) setColorNumber(colorNumber => changeColorNumber(colorNumber));
    newGalleryItem(quoteObj.content, quoteObj.author, false);
    setGallChoose(gallArray.length - 1);
    setTimeout(() => {
      setQuoteText(quoteObj.content);
      setAuthor(quoteObj.author);
      setFadeQuote('In');
    }, 300);
  };
  return newQuote;
}

export default useNewQuote;