import React, { useContext, useState } from "react";
import { Context } from "../../../Context.js";
import useRedirectTo from "../../../functions/useRedirectTo.js";
import useLogout from '../../../functions/useLogout.js';

function VerifyEmail() {
  const { colors, refs } = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const [messagesArray, setMessagesArray] = refs.msg;
  const [verified, setVerified] = refs.ver;
  const [codeValue, setCodeValue] = useState("");
  const logout = useLogout();
  const redirectTo = useRedirectTo();

  async function handlePostCode(event) {
    event.preventDefault();
    const auxArray = [];
    if (codeValue !== '') {
      const response = await fetch("/users/verifyEmail", {
        method: "PUT",
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
        setVerified(true);
        redirectTo('/loggedIn');
      } else {      
        auxArray.push(json.message);
      };
    } else {
      auxArray.push('Please enter the code sent');
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
    logout();
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