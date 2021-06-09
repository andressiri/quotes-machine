import React, {useState, createContext, useRef} from "react";

export const Context = createContext();

export const ContextProvider = (props) => {
  const [colorNumber, setColorNumber] = useState(0);
  const [quoteText, setQuoteText] = useState('');
  const [author, setAuthor] = useState('');
  const [handleAuto, setHandleAuto] = useState('Interval is off');
  const [autoClass, setAutoClass] = useState('autoBtn btnOff BG-color');
  const [autoTime, setAutoTime] = useState(10000);
  const [fade, setFade] = useState('In');
  const quoteRef = useRef('null');
  
  return (
    <Context.Provider value={
      {colorNum: [colorNumber, setColorNumber],
       quote: [quoteText, setQuoteText],
       auth: [author, setAuthor],
       auto: [handleAuto, setHandleAuto],
       aClass: [autoClass, setAutoClass],
       aTime: [autoTime, setAutoTime],
       fad: [fade, setFade],
       ref: quoteRef
      }
    }>
        {props.children}
    </Context.Provider>
  );
};