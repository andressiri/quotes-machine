import React, {useContext} from "react";
import {Context} from "../../../Context.js";

function LoggedInMenu() {
  const {colors, quote, auto, groups, refs} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const [groupRef, setGroupRef] = groups.gRef;

  return (
    <div>
        <h2 className={`shareIt`} >My Quotes</h2>
        <h2 className={`shareIt`} >Config</h2>
        <h2 className={`shareIt`} >Log out</h2>
    </div>
    );
};

export default LoggedInMenu;