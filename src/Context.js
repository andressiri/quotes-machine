import React, {useState, createContext} from "react"

export const Context = createContext();

export const ContextProvider = (props) => {
    const [colorNumber, setColorNumber] = useState(0);
    const [quoteText, setQuoteText] = useState('');
    const [author, setAuthor] = useState('');
    
    return (
        <Context.Provider value={{colorNum: [colorNumber, setColorNumber], quote: [quoteText, setQuoteText], auth: [author, setAuthor]}} >
            {props.children}
        </Context.Provider>
    );
};