import React, {useContext} from "react";
//import {Context} from "../../../Context.js";
import useLogout from '../../../functions/useLogout.js';

function LoggedInMenu() {
  //const {refs} = useContext(Context);
  const logout = useLogout();

  function handleLogOut () {
    logout();
  };

  return (
    <div>
        <h2 className={`shareIt`} >My Quotes</h2>
        <h2 className={`shareIt`} >Config</h2>
        <h2 className={`shareIt`} onClick={handleLogOut} >Log out</h2>
    </div>
    );
};

export default LoggedInMenu;