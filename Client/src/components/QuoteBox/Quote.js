import React, {useContext} from 'react';
import {Context} from '../../Context.js';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function Quote() {
  const {colors, quote, fade, refs, edit} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const [quoteText, setQuoteText] = quote.quoteTxt;  
  const [author, setAuthor] = quote.auth;
  const [fadeQuote, setFadeQuote] = fade.fadQ; 
  const quoteRef = refs.refImg;
  const [fontFam, setFontFam] = edit.fontF;
  const [boldFont, setBoldFont] = edit.boldF;
  const [italicFont, setItalicFont] = edit.italicF;
  const [upperFont, setUpperFont] = edit.upperF;
  const [fSize, setFSize] = edit.fontS;
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
    <div className={`quote BG-color${imgBGColor} text-color${colorNumber}`} ref={quoteRef} id='refDiv'>
      <div className={`fade${fadeQuote}`}>        
      <h1 id='text' className={`text`} style={textStyle} >
        <FontAwesomeIcon icon='quote-left' />
        {` ${quoteText} `}
        <FontAwesomeIcon icon='quote-right' /> 
      </h1>
      <p id='author' style={authorStyle}>{`- ${author}`}</p>       
      </div>
    </div >
  );
};

export default Quote;