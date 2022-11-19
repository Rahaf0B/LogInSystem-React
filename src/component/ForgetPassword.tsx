import React, { FC } from "react";
import TextField from "../component/TextField";
import Button from "../component/Button";
import logo from "../assest/logo.png";
const ForgetPassword = ({ isShowForgetPassword, handleLoginClick }) => {
  const [password, setPassword] = React.useState({
    newPassword: null,
    confirmPassword: null,
  });

  const [isError, setIsError] = React.useState({
    NumberOFChar: "black",
    UpperCase: "black",
    specialCharacter: "black",
  });

  const handleChange = (event) => {
    let colorText = ["black", "black", "black"];

    const key = event.target.className.split("-")[1];
    if (event.target.value.length < 8) {
      colorText[0] = "#973149";
    }

    if (!/[A-Z]/.test(event.target.value)) {
      colorText[1] = "#973149";
    }
    if (!/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(event.target.value)) {
      colorText[2] = "#973149";
    }
    setIsError({
      ...isError,
      NumberOFChar: colorText[0],
      UpperCase: colorText[1],
      specialCharacter: colorText[2],
    });
    setPassword({ ...password, [key]: event.target.value });
  };

  const handleSubmit = (e) => {
    if (Object.values(isError).includes(null)) {
      alert("you should fill al the fields");
    } else if (!Object.values(isError).includes("#973149")) {
      if (password.newPassword !== password.confirmPassword) {
        alert("New Password and the Confirm are not matching");
      } else {
        alert("The password has been updated");
        handleLoginClick(e);
      }
    } else {
      alert("The password you entered does not match with the conditions");
    }
  };

  return (
    <div className={`${!isShowForgetPassword ? "active" : ""} show`}>
      <div className="forgetPassword-box solid">
        <div>
          <div className="logo-img">
            <img className="img-wasfaty-box" src={logo}></img>
          </div>

          <div  style={{boxShadow:" 0px 3px 6px #1B23464D"}} className="div-rest-password">
            <div className="div-text-password">Rest Password</div>
          </div>

          <div className="input-passwords">
            <TextField
              className="TextField-newPassword"
              placeholder="New Password"
              size="md"
              type="password"
              handleChange={handleChange}
              borderRadius={10}
              border="1px solid #E1E8F1"
            />
            <TextField
              className="TextField-confirmPassword"
              placeholder="password"
              size="md"
              handleChange={handleChange}
              borderRadius={10}
              type="password"
              border="1px solid #E1E8F1"
            />
          </div>
          <div className="div-back-button">
            <Button
              className="button-confirm"
              backgroundColor="#1B2346"
              label="Reset"
              size="lg"
              color="white"
              borderRadius={5}
              handleClick={(e) => handleSubmit(e)}
              boxShadow=" 0px 3px 6px #1B23464D"
           ></Button>
          </div>
          <div className="div-password-validation">
            <ul className="ul-password-validation">
              Password Must Contain:
              <li style={{ color: isError.NumberOFChar }}>
                Minimum of 8 characters
              </li>
              <li style={{ color: isError.UpperCase }}>
                At least one uppercase letter
              </li>
              <li style={{ color: isError.specialCharacter }}>
                At least one special character (I.e !@#$%&)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
