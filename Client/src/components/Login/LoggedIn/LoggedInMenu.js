import React from "react";
import KeepLoggedBtn from "./KeepLoggedBtn.js";
import LogoutBtn from "./LogoutBtn.js";

function LoggedInMenu() {
  return (
    <div>
        <h2 className={`shareIt`} >You are already logged in, do you want to log out?</h2>
        <KeepLoggedBtn />
        <LogoutBtn />
    </div>
    );
};

export default LoggedInMenu;