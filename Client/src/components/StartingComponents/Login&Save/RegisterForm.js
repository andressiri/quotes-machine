import React, { useContext, useState } from "react";
import { Context } from "../../../Context.js";
import { useNavigate } from "react-router-dom";

function RegisterForm() {
  const { colors, refs } = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const [messagesArray, setMessagesArray] = refs.msg;
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [password2Value, setPassword2Value] = useState("");
  const navigate = useNavigate();

  async function handleSubmitRegister(event) {
    event.preventDefault();
    const auxArray = [];    
    //Check required fields
    if (nameValue === "" || emailValue === "" || passwordValue === "" || password2Value === "") {
      auxArray.push("Please fill in all fields");
    };
    //Check valid email
    if (emailValue !== '' &&
       (emailValue.length < 5 ||
        emailValue.split('').filter(char => char === '@').length !== 1 ||
        emailValue.split('').filter(char => char === '.').length < 1)) {
      auxArray.push("Please enter a valid email");    
    };
    //Check passwords match
    if (passwordValue !== "" && passwordValue !== password2Value) {
      auxArray.push("Passwords do not match");
    };
    //Check password length
    if (passwordValue !== "" && passwordValue.length < 6) {
      auxArray.push("Password should be at least 6 characters");
    };
    // POST the form if it meets requirements
    if (auxArray.length === 0) {
      const response = await fetch("/users/register", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: nameValue,
          email: emailValue,
          password: passwordValue,
        }),
      });
      let json = await response.json();
      // Check if mail is available
      if (json.msg === "Email is already registered") {
        auxArray.push(json.msg);
      } else if (json.msg === "Registered successfully") {
        auxArray.push(json.msg);
        navigate('/login');
      };
    };
    setMessagesArray(auxArray);
  };

  function handleGoToLogin() {
    setMessagesArray([]);
    navigate('/login');
  };

  return (
    <div>
      {messagesArray.map((msg, i) => (
        <p className={`shareIt`} key={i} >{msg}</p>
      ))}
      <form id="registerForm">
        <input
          type="text"
          placeholder="Name..."
          className={`NQbtn BG-color${colorNumber} text-color${imgBGColor}`}
          required
          onChange={(event) => setNameValue(event.target.value)}
        />
        <input
          type="email"
          placeholder="Email..."
          className={`NQbtn BG-color${colorNumber} text-color${imgBGColor}`}
          required
          onChange={(event) => setEmailValue(event.target.value)}
        />
        <input
          type="password"
          placeholder="Password..."
          className={`NQbtn BG-color${colorNumber} text-color${imgBGColor}`}
          required
          onChange={(event) => setPasswordValue(event.target.value)}
        />
        <input
          type="password"
          placeholder="Repeat Password..."
          className={`NQbtn BG-color${colorNumber} text-color${imgBGColor}`}
          required
          onChange={(event) => setPassword2Value(event.target.value)}
        />
        <button
          className={`NQbtn BG-color${colorNumber} text-color${imgBGColor}`}
          onClick={handleSubmitRegister}
        >
          Register
        </button>
      </form>
      <h2 className={`shareIt`} onClick={handleGoToLogin}>
        Go to login
      </h2>
    </div>
  );
}

export default RegisterForm;
