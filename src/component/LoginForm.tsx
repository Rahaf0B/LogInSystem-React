import React from "react";
import logo from "../assest/logo.png";
import { RegisterForm } from "component/RegisterForm";
import { ConfirmCode } from "./ConfirmCode";

import TextField from "../component/TextField";
import Button from "../component/Button";
import CheckBox from "./Checkbox";
export const LoginForm = ({
  isShowLogin,
  handleLoginClick,
  handleRegClick,
  handleConfirmClick,
  handleLoginConfirmClick,
}) => {
  const [user, setUser] = React.useState({
    ID: null,
    password: null,
  });
  const [val, setvalue] = React.useState(null);
  // const box = React.createRef();

  // const handleOutsideClick = (event) => {
  //   if (box && box?.current?.contains(event?.target)) {
  //     alert('click outside');
  //   }
  // }

  // document.addEventListener('click', handleOutsideClick);
  const inputRef = React.createRef();
  const [isError, setIsError] = React.useState(false);
  const [isShowConfirm, setIsShowConfirm] = React.useState(false);
  const handleChange = (event) => {
    const key = event.target.className.split("-")[1];

    setUser({ ...user, [key]: event.target.value });
  };
  const handleClick = () => {
    handleLoginClick();
  };

  const handleRegisterClick = (e) => {
    setUser({ ...user, ID: "", password: "" });
    handleRegClick(e);
  };

  const handelForgetSubmit = (e) => {
    setUser({ ...user, ID: "", password: "" });
    handleConfirmClick(
      e,
      "Forget Password",
      "Verify",
      "Back to Signin",
      "sign",
      "56789989"
    );
  };

  const handelSignClick = (e) => {
    if (user.ID === "123456" && user.password === "123456") {
      setIsError((isError) => false);
      e.target.reset();
      setUser({ ...user, ID: "", password: "" });
      handleLoginConfirmClick(e);
    } else if (
      Object.values(user).includes("") ||
      Object.values(user).includes(null)
    ) {
      e.preventDefault();
      alert("You must fill all the fields");
      setIsError((isError) => false);
    } else {
      e.preventDefault();
      setIsError((isError) => true);
    }
  };

  return (
    <div className={`${!isShowLogin ? "active" : ""} show`}>
      <div className="login-box solid">
        <div>
          <div className="logo-img">
            <img className="img-wasfaty-box" src={logo}></img>
          </div>

          <div className="form-box solid">
            <form onSubmit={(e) => handelSignClick(e)}>
              <div className="div-sign-Register">
                <Button
                  className="login-text"
                  backgroundColor="#1b2346"
                  label="Signin"
                  size="md"
                  color="white"
                  borderRadius={8}
                  handleClick={handleClick}
                  boxShadow=" 0px 3px 6px #1B23464D"
                ></Button>

                <Button
                  className="Register-text"
                  backgroundColor="#f0f3f7"
                  label="Register now!"
                  size="md"
                  color="#1b2346"
                  borderRadius={8}
                  handleClick={(e) => handleRegisterClick(e)}
                  boxShadow=" 0px 3px 6px #1B23464D"
              />
              </div>
              <TextField
                className="TextField-ID-login"
                placeholder="National ID / Mobile NO"
                size="md"
                type="number"
                handleChange={(e) => handleChange(e)}
                borderRadius={10}
                value={user.ID}
                border="1px solid #E1E8F1"
              />
              <TextField
                className="TextField-password-login"
                placeholder="password"
                size="md"
                handleChange={(e) => handleChange(e)}
                borderRadius={10}
                type="password"
                value={user.password}
                border="1px solid #E1E8F1"
              />
              {isError && (
                <div className="div-error">
                  National ID/Mobile NO or the Password is wrong
                </div>
              )}
              <div>
                <div className="Checkbox-button">
                  <CheckBox />
                  <Button
                    backgroundColor="transparent"
                    label="Forget Password?"
                    size="md"
                    color="black"
                    borderRadius={5}
                    handleClick={(e) => handelForgetSubmit(e)}
                  ></Button>
                </div>
                <Button
                  className="button-signin"
                  backgroundColor="#1B2346"
                  label="Signin"
                  size="lg"
                  color="white"
                  borderRadius={5}
                  type="submit"
                  boxShadow=" 0px 3px 6px #1B23464D"
            ></Button>
               
              </div>
             
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
