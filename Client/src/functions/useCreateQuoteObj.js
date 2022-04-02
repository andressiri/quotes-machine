import {useContext} from 'react';
import {Context} from './../Context.js';

function useCreateQuoteObj () {
  const {colors, quote, edit} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const [quoteText, setQuoteText] = quote.quoteTxt;
  const [author, setAuthor] = quote.auth;
  const [fontFam, setFontFam] = edit.fontF;
  const [boldFont, setBoldFont] = edit.boldF;
  const [italicFont, setItalicFont] = edit.italicF;
  const [upperFont, setUpperFont] = edit.upperF;
  const [fSize, setFSize] = edit.fontS;
    
  const createQuoteObj = function createQuoteObject (custom) {
    const quoteObj = {
      content: quoteText,
      author: author,
      custom: custom,
      favorite: false,
      colorNum: colorNumber,
      imgBG: imgBGColor,
      fontF: fontFam,
      boldF: boldFont,
      italicF: italicFont,
      upperF: upperFont,
      fontS: fSize
    };
    return quoteObj;
  };  
  return createQuoteObj;
};

export default useCreateQuoteObj;