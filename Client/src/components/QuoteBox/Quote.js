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
  const [fontFam, setFontFam] = edit.fontF;
  const [boldFont, setBoldFont] = edit.boldF;
  const [italicFont, setItalicFont] = edit.italicF;
  const [upperFont, setUpperFont] = edit.upperF;
  const [fSize, setFSize] = edit.fontS;
  const quoteRef = refs.refImg;
  let adjustFSize = fSize;
  let breakpoint = 120;
  if (window.innerWidth <= 300) breakpoint = breakpoint - 20;
  if (upperFont === 'uppercase') breakpoint = breakpoint - 20;
  if (fSize >= 37) breakpoint = breakpoint - 10;
  if (fSize >= 39) breakpoint = breakpoint - 10;
  if (quoteText.length >= breakpoint) adjustFSize = fSize * 0.9;
  if (quoteText.length >= breakpoint * 1.33) adjustFSize = fSize * 0.85;
  if (quoteText.length >= breakpoint * 1.66) adjustFSize = fSize * 0.8;
  if (quoteText.length >= breakpoint * 2) adjustFSize = fSize * 0.75;
  let contentFSize = `calc(0.8vw * ${adjustFSize/3}`;
  let authorFSize = `calc(0.8vw * ${adjustFSize/3} * 0.6)`;
  if (window.innerWidth >= 500) {
    contentFSize = `calc(3.5px * ${adjustFSize/3})`;
    authorFSize = `calc(3.5px * ${adjustFSize/3} * 0.6)`;
  };

  const textStyle = {
    fontFamily: `${fontFam}`,
    fontWeight: `${boldFont}`,
    fontStyle: `${italicFont}`,
    textTransform: `${upperFont}`,
    fontSize: `${contentFSize}`
  };
  const authorStyle = {
    fontFamily: `${fontFam}`,
    fontWeight: `${boldFont}`,
    fontStyle: `${italicFont}`,
    textTransform: `${upperFont}`,
    fontSize: `${authorFSize}`
  };

  return (
    <div className={`quote BG-color${imgBGColor} text-color${colorNumber}`} ref={quoteRef} id='boxRefDiv'>
      <div className={`fade${fadeQuote}`}>
        <h1 id='text' className={'text'} style={textStyle} >
          <FontAwesomeIcon icon='quote-left' className={`quoteIcon`} />
          {` ${quoteText} `}
          <FontAwesomeIcon icon='quote-right' className={`quoteIcon`} />
        </h1>
        <p id='author' style={authorStyle}>{`- ${author}`}</p>
      </div>
    </div>
  );
};

export default Quote;