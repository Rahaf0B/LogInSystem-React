import React, { useEffect, useState } from "react";

import Button from "./component/Button";
import { Red } from "stories/Button.stories";
import Header from "component/Header";
import { LoginForm } from "component/LoginForm";
import Body from "pages/HomePage";
import { RegisterForm } from "component/RegisterForm";
import { ConfirmCode } from "component/ConfirmCode";
import WelcomePage from "component/Welcomcomponent";
import ForgetPassword from "component/ForgetPassword";
function App() {
  const [isShowLogin, setIsShowLogin] = useState(false);
  const [isShowRegister, setIsShowRegister] = useState(false);
  const [isShowConfirm, setIsShowConfirm] = useState(false);
  const [whichHandler, setWhichHandler] = useState("");
  const [isShowWelcome, setIsShowWelcome] = useState(false);
  // const [timer,setTimer]=useState({ minutes:2, seconds:30 });
  const [minutes, setMinutes] = useState(2);
  const [seconds, setSeconds] = useState(30);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isShowForgetPassword, setIsShowForgetPassword] = useState(false);
  const [propHomePage, setPropHomePage] = useState({
    opacity: 1,
    backgroundColor: "",
  });
  useEffect(() => {
    setMinutes(2);
  }, []);
  useEffect(() => {
    setSeconds(30);
  }, []);

  const [textView, setTextView] = useState({
    titleVlaue: false,
    buttonValue: false,
    bottomButtonVlaue: false,
  });
  const handleLoginClick = (e) => {
    e.preventDefault();

    // setTimer({ ...timer, minutes:2, seconds: 30 });
    setIsShowLogin((isShowLogin) => !isShowLogin);
    setIsShowRegister((isShowRegister) => false);
    setIsShowWelcome((isShowWelcome) => false);
    setIsShowConfirm((isShowConfirm) => false);
    setIsShowForgetPassword((isShowForgetPassword) => false);

    setPropHomePage({
      ...propHomePage,
      opacity: 0.5,
      backgroundColor: "black",
    });
  };
  const handleRegisterClick = (e) => {
    e.preventDefault();
    // setTimer({ ...timer, minutes:2, seconds: 30 });
    setIsShowRegister((isShowRegister) => !isShowRegister);
    setIsShowLogin((isShowLogin) => false);
    setIsShowForgetPassword((isShowForgetPassword) => false);
    setIsShowConfirm((isShowConfirm) => false);
    setIsShowWelcome((isShowWelcome) => false);
  };
  const handleLoginConfirmClick = (e) => {
    e.preventDefault();
    setIsShowWelcome((isShowWelcome) => !isShowWelcome);
    setIsShowLogin((isShowLogin) => false);
    setIsShowForgetPassword((isShowForgetPassword) => false);

    setIsShowRegister((isShowRegister) => false);
    setIsShowConfirm((isShowConfirm) => false);
  };
  const handleForgetPassword = (e) => {
    e.preventDefault();
    setIsShowForgetPassword((isShowForgetPassword) => !isShowForgetPassword);
    setIsShowLogin((isShowLogin) => false);
    setIsShowRegister((isShowRegister) => false);
    setIsShowConfirm((isShowConfirm) => false);
    setIsShowWelcome((isShowWelcome) => false);
  };
  const handelStartTheSystem = (e) => {
    e.preventDefault();
    setIsShowLogin((isShowLogin) => false);
    setIsShowForgetPassword((isShowForgetPassword) => false);
    setIsShowRegister((isShowRegister) => false);
    setIsShowConfirm((isShowConfirm) => false);
    setIsShowWelcome((isShowWelcome) => false);
    setPropHomePage({
      ...propHomePage,
      opacity: 1,
    });
  };
  const handleConfirmClick = (
    e,
    textValue,
    buttonVlaue,
    BackTextValue,
    handlerName,
    phoneNumbers
  ) => {
    e.preventDefault();
    setIsShowConfirm((isShowConfirm) => !isShowConfirm);
    setIsShowRegister((isShowRegister) => false);
    setIsShowWelcome((isShowWelcome) => false);
    setIsShowLogin((isShowLogin) => false);
    setTextView({
      ...textView,
      titleVlaue: textValue,
      buttonValue: buttonVlaue,
      bottomButtonVlaue: BackTextValue,
    });
    setWhichHandler((whichHandler) => handlerName);
    setPhoneNumber((phoneNumber) => phoneNumbers);
  };

  return (
    <div className="App">
      <Header
        handleLoginClick={handleLoginClick}
        handelStartTheSystem={handelStartTheSystem}
      ></Header>
      <LoginForm
        isShowLogin={isShowLogin}
        handleLoginClick={handleLoginClick}
        handleRegClick={handleRegisterClick}
        handleConfirmClick={handleConfirmClick}
        handleLoginConfirmClick={handleLoginConfirmClick}
      />
      <RegisterForm
        isShowRegister={isShowRegister}
        handleLoginClick={handleLoginClick}
        handleConfirmClick={handleConfirmClick}
      />
      <ConfirmCode
        isShowConfirm={isShowConfirm}
        textView={textView.titleVlaue}
        buttonText={textView.buttonValue}
        bottomButtonText={textView.bottomButtonVlaue}
        handlerName={whichHandler}
        handleLoginClick={handleLoginClick}
        handleRegClick={handleRegisterClick}
        handleForgetPassword={handleForgetPassword}
        timerMinutes={minutes}
        timerSecond={seconds}
        phoneNumber={phoneNumber}
      />
      <WelcomePage
        isShowWelcome={isShowWelcome}
        handelStartTheSystem={handelStartTheSystem}
      />
      <ForgetPassword
        isShowForgetPassword={isShowForgetPassword}
        handleLoginClick={handleLoginClick}
      />
      <Body
        opacity={propHomePage.opacity}
        backgroundColor={propHomePage.backgroundColor}
      ></Body>
    </div>
  );
}

export default App;
