import React from "react";
import logo from "../assest/logo.png";
import TextField from "../component/TextField";
import Button from "../component/Button";
import CountDownTimer from "./CounterTime";
export const ConfirmCode = ({
  isShowConfirm,
  textView,
  buttonText,
  bottomButtonText,
  handlerName,
  handleLoginClick,
  handleRegClick,
  handleForgetPassword,
  timerMinutes,
  timerSecond,
  phoneNumber,
}) => {
  const [confirmCode, setconfirmCode] = React.useState({
    firstNumber: null,
    secondNumber: null,
    thirdNumber: null,
    fourthNumber: null,
  });
  const [timer, setTimer] = React.useState({
    seconds: timerSecond,
    minutes: timerMinutes,
  });
  const handelchange = (e) => {
    const key = e.target.className.split(" ")[1];
    setconfirmCode({ ...confirmCode, [key]: e.target.value });
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    if (Object.values(confirmCode).includes(null)) {
      alert("the Code is not correct");
    } else {
      let isCorrect = 0;
      Object.values(confirmCode).map(([val]) => {
        isCorrect = Number(val) + isCorrect;
      });
      if (isCorrect === 20) {
        if (handlerName === "Reg") {
          handleLoginClick(e);
        } else {
          handleForgetPassword(e);
        }
      }
    }
  };

  const handlerBack = (e) => {
    setTimer({ minutes: 2, seconds: 30 });
    if (handlerName === "sign") {
      handleLoginClick(e);
    } else {
      handleRegClick(e);
    }
  };

  return (
    <div className={`${!isShowConfirm ? "active" : ""} show`}>
      <div className="code-box solid">
        <div>
          <div className="logo-img">
            <img className="img-wasfaty-box" src={logo}></img>
          </div>
          <div>
            <div
              className="Register-text forget-text"
              
            >
              <div className="Register-forget-text">
              {textView}

              </div>
            </div>
          </div>
          <div className="div-confirm-text">
            Please enter the confirmation code that has been sent to your mobile
            number +962 {phoneNumber.slice(0, 3).trim()}{" "}
            {phoneNumber.slice(3, 6).trim()}{" "}
            {phoneNumber.slice(6, phoneNumber.length).trim()}
          </div>

          <div>
            <CountDownTimer
              minutes={timer.minutes}
              seconds={timer.seconds}
              handelchangeVal={handelchange}
            />
          </div>
          <div className="div-confirm-button">
            <Button
              className="button-confirm"
              backgroundColor="#1B2346"
              label={buttonText}
              size="lg"
              color="white"
              borderRadius={5}
              handleClick={(e) => handelSubmit(e)}
              boxShadow=" 0px 3px 6px #1B23464D"
           ></Button>
          </div>
          <div className="div-back-button">
            <Button
              backgroundColor="transparent"
              label={bottomButtonText}
              size="md"
              color="black"
              borderRadius={5}
              handleClick={(e) => handlerBack(e)}
          
          ></Button>
          </div>
        </div>
      </div>
    </div>
  );
};
