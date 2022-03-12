import React, {createContext, useState, useRef} from "react";

export const Context = createContext();

export const ContextProvider = (props) => {
  //colors
  const [colorNumber, setColorNumber] = useState(0);
  const [imgBGColor, setImgBGColor] = useState(7);  
  //quote
  const [quoteText, setQuoteText] = useState('Welcome to my quotes machine.');
  const [author, setAuthor] = useState('Andrés Siri');
  const [fadeQuote, setFadeQuote] = useState('In');
  //auto
  const [handleAuto, setHandleAuto] = useState('Interval is off');
  const [autoClass, setAutoClass] = useState(false);
  const [autoTime, setAutoTime] = useState(10000);
  //groups
  const [groupRef, setGroupRef] = useState('StartingSet');
  const [hideCancelBtn, setHideCancelBtn] = useState(true);
  //refs
  const quoteRef = useRef('null');
  const [shareChosen, setShareChosen] = useState('');
  const [messagesArray, setMessagesArray] = useState([]);
  //custom
  const [fontFam, setFontFam] = useState('Arial, Helvetica, sans-serif');
  const [boldFont, setBoldFont] = useState('normal');
  const [italicFont, setItalicFont] = useState('normal');
  const [upperFont, setUpperFont] = useState('none');
  const [fSize, setFSize] = useState(35);
  //gall
  const [gallArray, setGallArray] = useState([{text: quoteText, author: author}]);
  const [gallChoose, setGallChoose] = useState(0);
  
  return (
    <Context.Provider value={{
      colors: {
        colorNum: [colorNumber, setColorNumber],
        imgBG: [imgBGColor, setImgBGColor],
      },
      quote: {
        quoteTxt: [quoteText, setQuoteText],
        auth: [author, setAuthor],
        fadQ: [fadeQuote, setFadeQuote]
      },
      auto: {
        hAuto: [handleAuto, setHandleAuto],
        aClass: [autoClass, setAutoClass],
        aTime: [autoTime, setAutoTime]
      },
      groups: {
        gRef: [groupRef, setGroupRef],
        cancel: [hideCancelBtn, setHideCancelBtn],
      },
      refs : {
        refImg: quoteRef,
        sChosen: [shareChosen, setShareChosen],
        msg: [messagesArray, setMessagesArray]
      },
      custom: {
        fontF: [fontFam, setFontFam],
        boldF: [boldFont, setBoldFont],
        italicF: [italicFont, setItalicFont],
        upperF: [upperFont, setUpperFont],
        fontS: [fSize, setFSize]
      },
      gall: {
        gallA: [gallArray, setGallArray],
        gallCh: [gallChoose, setGallChoose]
      }
    }}>
      {props.children}
    </Context.Provider>
  );
};