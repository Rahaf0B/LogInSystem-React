import React, { FC } from "react";

import logo from "../assest/logo.png";
import Button from "../component/Button";
import checkCircle from "../assest/check-circle.png";
const WelcomePage = ({ isShowWelcome, handelStartTheSystem }) => {
  const handelSubmit = (e) => {
    handelStartTheSystem(e);
  };
  return (
    <div className={`${!isShowWelcome ? "active" : ""} show`}>
      <div className="welcome-box solid">
        <div>
          <div className="logo-img">
            <img src={logo}></img>
          </div>
        </div>

        <div className="div-thank">
          <div className="div-text-thank">Thank you!</div>
        </div>
        <div>
          <div className="logo-img">
            <img className="img-wasfaty-box" src={checkCircle}></img>
          </div>
        </div>
        <div className="div-text-WasfatiPlus">
          Welcome to WasfatiPlus Platform
        </div>
        <div className="div-start-button">
          <Button
            className="start-text"
            backgroundColor="#1b2346"
            label="Start and Enjoy"
            size="md"
            color="white"
            borderRadius={8}
            handleClick={(e) => handelSubmit(e)}
            boxShadow="box-shadow: 0px 3px 6px #1B23464D"
          ></Button>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
