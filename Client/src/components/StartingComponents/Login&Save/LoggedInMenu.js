import React, {useContext} from "react";
import { useNavigate } from "react-router-dom";

function LoggedInMenu() {
  const navigate = useNavigate();

  function handleLogOut () {
    navigate('/login')
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