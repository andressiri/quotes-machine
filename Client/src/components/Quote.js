import React, {useContext} from 'react';
import {Context} from '../Context.js';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import './../styles/icon.scss';
import './../styles/Quote.scss';

function Quote() {
  const {colors, quote, refs, custom} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const [quoteText, setQuoteText] = quote.quoteTxt;  
  const [author, setAuthor] = quote.auth;
  const [fadeQuote, setFadeQuote] = quote.fadQ; 
  const quoteRef = refs.refImg;
  const [fontFam, setFontFam] = custom.fontF;
  const [boldFont, setBoldFont] = custom.boldF;
  const [italicFont, setItalicFont] = custom.italicF;
  const [upperFont, setUpperFont] = custom.upperF;
  const [fSize, setFSize] = custom.fontS;
  let adjustFSize = fSize - 15;

  const textStyle = {
    fontFamily: `${fontFam}`,
    fontWeight: `${boldFont}`,
    fontStyle: `${italicFont}`,
    textTransform: `${upperFont}`, 
    fontSize: `${fSize}px`
  };
  const authorStyle = {
    fontFamily: `${fontFam}`,
    fontWeight: `${boldFont}`,
    fontStyle: `${italicFont}`,
    textTransform: `${upperFont}`, 
    fontSize: `${adjustFSize}px`
  };

  return (    
    <div className={`quote BG-color${imgBGColor} text-color${colorNumber} fade${fadeQuote}`} ref={quoteRef} id='refDiv'>
      <h1 id="text" className={`text fade${fadeQuote}`} style={textStyle} >
        <FontAwesomeIcon icon="quote-left" className={`quoteIcon fade${fadeQuote}`} />
        {` ${quoteText} `}
        <FontAwesomeIcon icon="quote-right" className={`quoteIcon fade${fadeQuote}`} /> 
      </h1>
      <p id="author" className={`fade${fadeQuote}`} style={authorStyle}>{`- ${author}`}</p>       
    </div >
  );
};

export default Quote;