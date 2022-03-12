import React, { useContext } from "react";
import { Context } from "../Context.js";
import Gallery from "./StartingComponents/Gallery/Gallery.js";
import StartingSetSharing from "./StartingComponents/Sharing/StartingSetSharing.js";
import ChooseTxtOrImgSet from "./ChooseTxtOrImgComponents/ChooseTxtOrImgSet.js";
import ShareCustomOrDefaultSet from "./ShareCustomOrDefaultComponents/ShareCustomOrDefaultSet.js";
import EditSet from "./EditComponents/EditSet.js";
import LoginForm from "./StartingComponents/Login&Save/LoginForm.js";
import LoggedInMenu from "./StartingComponents/Login&Save/LoggedInMenu.js";
import RegisterForm from "./StartingComponents/Login&Save/RegisterForm";

function GroupContainer() {
  const { colors, quote, auto, groups, refs } = useContext(Context);
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const [groupRef, setGroupRef] = groups.gRef;
  let activeGroup = <div />;

  switch (groupRef) {
    case "StartingSet":
      activeGroup = (
        <div>
          <Gallery />
          <StartingSetSharing />
        </div>
      );
      break;
    case "ChooseTxtOrImgSet":
      activeGroup = <ChooseTxtOrImgSet />;
      break;
    case "ShareCustomOrDefaultSet":
      activeGroup = <ShareCustomOrDefaultSet />;
      break;
    case "EditSet":
      activeGroup = <EditSet />;
      break;
    case "LoginForm":
      activeGroup = <LoginForm />;
      break;
    case "LoggedInMenu":
      activeGroup = <LoggedInMenu />;
      break;
    case "RegisterForm":
      activeGroup = <RegisterForm />;
      break;
  }
  return (
    <div className={`groupContainer BG-color${imgBGColor}`}>{activeGroup}</div>
  );
}

export default GroupContainer;
