import React from "react";
import KeepLoggedBtn from "./KeepLoggedBtn.js";
import LogoutBtn from "./LogoutBtn.js";
import useRedirectTo from "../../../functions/useRedirectTo.js";

function LoggedInMenu() {
  const redirectTo = useRedirectTo();
  
  function handleChangePassword() {    
    redirectTo('/box/verifyEmail');
  };

  function handleChangeName() {    
    redirectTo('/box/verifyEmail');
  };

  return (
    <div>
        <h4 className={`shareIt`} >You are already logged in, do you want to log out?</h4>
        <KeepLoggedBtn />
        <LogoutBtn />
        <p className={`shareIt`} onClick={handleChangePassword}>Change Password</p>
        <p className={`shareIt`} onClick={handleChangeName}>Change Name</p>
    </div>
    );
};

export default LoggedInMenu;