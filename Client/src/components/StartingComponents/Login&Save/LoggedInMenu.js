import React, {useContext} from "react";
import {Context} from "../../../Context.js";
import { useNavigate } from "react-router-dom";

function LoggedInMenu() {
  const {refs} = useContext(Context);
  const [currentPath, setCurrentPath] = refs.path;
  const navigate = useNavigate();

  function handleLogOut () {
    setCurrentPath('/login');
    navigate('/login');
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