import React, {useState, createContext} from "react"

export const ColorContext = createContext();

export const ColorProvider = (props) => {
    const [colorNumber, setColorNumber] = useState(0);
    return (
        <ColorContext.Provider value={[colorNumber, setColorNumber]}>
            {props.children}
        </ColorContext.Provider>
    );
}