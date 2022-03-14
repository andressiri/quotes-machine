import React, { useContext, useState } from "react";
import { Context } from "../../../Context.js";
import { useNavigate } from "react-router-dom";

function VerifyEmail() {
  const { colors, refs } = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const [messagesArray, setMessagesArray] = refs.msg;
  const [currentPath, setCurrentPath] = refs.path;
  const [codeValue, setCodeValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const navigate = useNavigate();

  async function handlePostCode(event) {
    event.preventDefault();
    const auxArray = [];
    
    const response = await fetch("/users/verifyEmail", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        code: codeValue,
      }),
    });
    let json = await response.json();
    if (json.message === 'Code is correct') {
      setCurrentPath('/loggedIn');
      navigate('/loggedIn');
    } else {      
      auxArray.push(json.message);
    };

    setMessagesArray(auxArray);
  };

  async function handleSendEmail(event) {
    event.preventDefault();
    const auxArray = [];    
    const response = await fetch("/users/sendVerifyEmail")    
    let json = await response.json();
    auxArray.push(json.message);
    setMessagesArray(auxArray);
  };

  function handleLogOut() {
    setMessagesArray([]);
    setCurrentPath('/login');
    navigate('/login');
  };

  return (
    <div>
      {messagesArray.map((msg, i) => (
        <p className={`shareIt`} key={i} >{msg}</p>
      ))}
      <form id="loginForm">
        <input
          type="text"
          placeholder="Enter code here..."
          className={`NQbtn BG-color${colorNumber} text-color${imgBGColor}`}
          onChange={(event) => setCodeValue(event.target.value)}
        />
        <button
          className={`NQbtn BG-color${colorNumber} text-color${imgBGColor}`}
          onClick={handlePostCode}
        >Check Code
        </button>
        <button
          className={`NQbtn BG-color${colorNumber} text-color${imgBGColor}`}
          onClick={handleSendEmail}
        >Send Email
        </button>
      </form>
      <h2 className={`shareIt`} onClick={handleLogOut}>
        Log Out
      </h2>
    </div>
  );
}

export default VerifyEmail;