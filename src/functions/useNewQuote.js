import {useContext} from 'react';
import {Context} from '../Context.js';
import changeColorNumber from './changeColorNumber.js';
import fetchRandomQuote from './fetchRandomQuote.js';

function useNewQuote () {
  const {colors, quote, auto, groups, refs} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [quoteText, setQuoteText] = quote.quoteTxt;  
  const [author, setAuthor] = quote.auth;
  const [fadeQuote, setFadeQuote] = quote.fadQ;
    
  const newQuote = async function getQuoteAndChangeColors () {    
    setFadeQuote('Out');
    let quoteObj = await fetchRandomQuote();
    await setColorNumber(colorNumber => changeColorNumber(colorNumber));
    await new Promise(resolve => setTimeout(resolve, 250));
    setQuoteText(quoteObj.content);
    setAuthor(quoteObj.author);
    setFadeQuote('In');
  };
  return newQuote;
}

export default useNewQuote;