import React, { useContext, useState } from "react";
import { Context } from "../../../Context.js";

function LoginForm() {
  const { colors, quote, auto, groups, refs } = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const [groupRef, setGroupRef] = groups.gRef;
  const [messagesArray, setMessagesArray] = refs.msg;
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const auxArray = [];
    const response = await fetch("/users/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: emailValue,
        password: passwordValue,
      }),
    });
    let json = await response.json();
    if (json.message === 'Login success') {
      setGroupRef("LoggedInMenu");
    } else {
      auxArray.push(json.message);
    }
    setMessagesArray(auxArray);
  };

  function handleRegister() {
    setMessagesArray([]);
    setGroupRef("RegisterForm");
  }

  return (
    <div>
      {messagesArray.map((msg) => (
        <p className={`shareIt`}>{msg}</p>
      ))}
      <form id="loginForm">
        <input
          type="email"
          placeholder="Email..."
          className={`NQbtn BG-color${colorNumber} text-color${imgBGColor}`}
          onChange={(event) => setEmailValue(event.target.value)}
        />
        <input
          type="password"
          placeholder="Password..."
          className={`NQbtn BG-color${colorNumber} text-color${imgBGColor}`}
          onChange={(event) => setPasswordValue(event.target.value)}
        />
        <button
          className={`NQbtn BG-color${colorNumber} text-color${imgBGColor}`}
          onClick={handleSubmit}
        >
          Login
        </button>
      </form>
      <h2 className={`shareIt`} onClick={handleRegister}>
        Register
      </h2>
    </div>
  );
}

export default LoginForm;
