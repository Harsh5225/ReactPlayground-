import React from "react";
import { useState } from "react";
const Main = () => {
  const [username, setusername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errorUserName, setErrorUserName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorConfrimPassword, setErrorConfirmPassword] = useState("");

  const [userColor, setUserColor] = useState("");
  const [emailColor, setEmailColor] = useState("");
  const [passwordColor, setPasswordColor] = useState("");
  const [confirmPasswordColor, setConfirmPasswordColor] = useState("");

  function validate(e){
    e.preventDefault();

    if(username.length>8){
      setErrorUserName("");
      setUserColor('green');
    }else{
      setErrorUserName("Username must be 8 letters long.");
      setUserColor("red");
    }

    if (email.includes("@gmail")) {
      setErrorEmail("");
      setEmailColor("green");
    } else {
      setEmailColor("red");
      setErrorEmail("Email should have @gmail");
    }

    if (password.length > 8) {
      setErrorPassword("");
      setPasswordColor("green");
    } else {
      setErrorPassword("Password should be 8 letters long ");
      setPasswordColor("red");
    }

    if(password!="" && password==confirmPassword){
      setErrorConfirmPassword("");
      setConfirmPasswordColor('green')
    }else{
      setErrorConfirmPassword("Passwords didn't matched.");
      setConfirmPasswordColor("red");
    }

  }

  return (
    <div>
      <form>
        {/* name field */}
        <input
          type="text"
          placeholder="name"
          value={username}
          style={{ borderColor: userColor }}
          onChange={(e) => {setusername(e.target.value)}}
        ></input>
        <p className="error">{errorUserName}</p>

        <input type="text" placeholder="email" value={email}   style={{ borderColor: emailColor }}onChange={(e)=>{setEmail(e.target.value)}
      }></input>
        <p className="error">{errorEmail}</p>

        <input type="password" placeholder="password" value={password}  style={{ borderColor: passwordColor }} onChange={(e)=>{setPassword(e.target.value)}}></input>
        <p className="error">{errorPassword}</p>

        <input type="password" placeholder="confirmpassword" value={confirmPassword}  style={{ borderColor: confirmPasswordColor }} onChange={(e)=>{setConfirmPassword(e.target.value)}}></input>
        <p className="error">{errorConfrimPassword}</p>

      <button className="submit-btn" onClick={(e)=>{validate(e)}}>Submit</button>
      </form>
    </div>
  );
};

export default Main;
