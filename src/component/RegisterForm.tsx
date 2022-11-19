import React, { useEffect, useState, useTransition } from "react";
import logo from "../assest/logo.png";

import TextField from "../component/TextField";
import Button from "../component/Button";
import CheckBox from "./Checkbox";

export const RegisterForm = ({
  isShowRegister,
  handleLoginClick,
  handleConfirmClick,
}) => {
  const [isError, setIsError] = useState({
    ID: false,
    Email: false,
    mobileNumber: false,
    password: false,
    confirmPassword: false,
  });
  const [errorValue, setErrorValue] = useState("");
  const [user, setUser] = useState({
    ID: null,
    Email: null,
    mobileNumber: null,
    password: null,
    confirmPassword: null,
  });
  const handelBackLogin = (e) => {
    setUser({
      ...user,
      ID: "",
      Email: "",
      mobileNumber: "",
      password: "",
      confirmPassword: "",
    });
    handleLoginClick(e);
  };
  const handleChange = (event) => {
    const key = event.target.className.split("-")[1];

    if (key === "Email") {
      if (!/\S+@\S+\.\S+/.test(event.target.value)) {
        setIsError({ ...isError, [key]: true });
        setErrorValue((errorValue) => "Wrong Email");
        if (event.target.value === "") {
          setIsError({ ...isError, [key]: true });

          setErrorValue((errorValue) => "You must fill this field");
        }
      } else {
        setIsError({ ...isError, [key]: false });
        setErrorValue((errorValue) => null);
        setUser({ ...user, [key]: event.target.value });
      }
    } else {
      setUser({ ...user, [key]: event.target.value });
      if (event.target.value === "") {
        setIsError({ ...isError, [key]: true });
        setErrorValue((errorValue) => "You must fill this field");
      } else {
        setIsError({ ...isError, [key]: false });
      }
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.values(isError).includes(true)) {
      alert("You have error in your data or you did not fill all the fields");
    } else if (Object.values(user).includes(null)) {
      alert("You must fill all the fields");
    } else if (user.password !== user.confirmPassword) {
      alert("your password and the confirmed password did not match ");
    } else {
      e.target.reset();
      const phoneNumber = user.mobileNumber;
      setUser({
        ...user,
        ID: null,
        Email: null,
        mobileNumber: null,
        password: null,
        confirmPassword: null,
      });

      handleConfirmClick(
        e,
        "Verify your account",
        "Confirm",
        "Back to Register",
        "Reg",
        phoneNumber
      );
    }
  };

  return (
    <div className={`${!isShowRegister ? "activeRegister" : ""} showRegister`}>
      <div className="Rigister-box solid">
        <div>
          <div className="logo-img">
            <img className="img-wasfaty-box" src={logo}></img>
          </div>

          <div className="form-box solid">
            <form onSubmit={(e) => handleSubmit(e)}>
              <div className="div-sign-Register">
                <Button
                  className="login-text"
                  backgroundColor="#f0f3f7"
                  label="Signin"
                  size="md"
                  color="#1b2346"
                  borderRadius={8}
                  handleClick={(e) => handelBackLogin(e)}
                  boxShadow=" 0px 3px 6px #1B23464D"
              ></Button>

                <Button
                  className="Register-text"
                  backgroundColor="#1b2346"
                  label="Register now!"
                  size="md"
                  color="white"
                  borderRadius={8}
                  handleClick={() => {}}
                  boxShadow="0px 3px 6px #1B23464D"
                
                ></Button>
              </div>
              <div className="TextField-Reg">
                <div>
                  <TextField
                    className="TextField-ID"
                    placeholder="National ID "
                    size="md"
                    type="number"
                    handleChange={(e) => handleChange(e)}
                    borderRadius={10}
                    border="1px solid #E1E8F1"
                    value={user.ID}
                  />
                  {isError.ID && <div className="div-error">{errorValue}</div>}
                </div>
                <div>
                  <TextField
                    className="TextField-Email"
                    placeholder="Email"
                    size="md"
                    type="text"
                    handleChange={(e) => handleChange(e)}
                    borderRadius={10}
                    border="1px solid #E1E8F1"
                    value={user.Email}
                  />
                  {isError.Email && (
                    <div className="div-error">{errorValue}</div>
                  )}
                </div>
                <div>
                  <TextField
                    className="TextField-mobileNumber"
                    placeholder="Mobile Number"
                    size="md"
                    type="number"
                    handleChange={(e) => handleChange(e)}
                    borderRadius={10}
                    border="1px solid #E1E8F1"
                    value={user.mobileNumber}
                  />
                  {isError.mobileNumber && (
                    <div className="div-error">{errorValue}</div>
                  )}
                </div>
                <div>
                  <TextField
                    className="TextField-password"
                    placeholder="Password"
                    size="md"
                    handleChange={(e) => handleChange(e)}
                    borderRadius={10}
                    type="password"
                    border="1px solid #E1E8F1"
                    value={user.password}
                  />

                  {isError.password && (
                    <div className="div-error">{errorValue}</div>
                  )}
                </div>
                <div>
                  <TextField
                    className="TextField-confirmPassword"
                    placeholder="Confirm password"
                    size="md"
                    handleChange={(e) => handleChange(e)}
                    borderRadius={10}
                    type="password"
                    border="1px solid #E1E8F1"
                    value={user.confirmPassword}
                  />
                  {isError.confirmPassword && (
                    <div className="div-error">{errorValue}</div>
                  )}
                </div>
                <div className="div-button-reg">
                  <Button
                    className="button-signin"
                    backgroundColor="#1B2346"
                    label="Register Now!"
                    size="lg"
                    color="white"
                    borderRadius={5}
                    type="submit"
                    boxShadow=" 0px 3px 6px #1B23464D"
                  ></Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
