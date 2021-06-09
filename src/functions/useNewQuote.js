import {useContext} from 'react';
import {Context} from '../Context.js';
import randomDifNum from './randomDifNum.js';
import fetchRandomQuote from './fetchRandomQuote.js';
import './../styles/RandomColor.scss';
import './../styles/AutoBtn.scss'

function useNewQuote () {
  const {colorNum, quote, auth, auto, aClass, aTime, fad} = useContext(Context);
  const [colorNumber, setColorNumber] = colorNum;
  const [quoteText, setQuoteText] = quote;  
  const [author, setAuthor] = auth;
  const [fade, setFade] = fad;
  
  const newQuote = async function getQuoteAndChangeColors () {    
    setFade('Out');
    let quoteObj = await fetchRandomQuote();
    await new Promise(resolve => setTimeout(resolve, 450));
    setColorNumber(randomDifNum(colorNumber));
    setQuoteText(quoteObj.content);
    setAuthor(quoteObj.author);
    setFade('In');
  };
  return newQuote;
}

export default useNewQuote;