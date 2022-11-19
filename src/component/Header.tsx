import React from "react";
import Button from "../component/Button";
import PropTypes from "prop-types";
import logo from "../assest/logo.png";
import Bag from "../assest/Bag.png";
import Customer from "../assest/Customer.png";
import Group from "../assest/Group.png";

import Heart from "../assest/Heart.png";
function Header({ handleLoginClick, handelStartTheSystem }) {
  const handleClick = (e) => {
    handleLoginClick(e);
  };
  const handleClickIcone = (e) => {
    handelStartTheSystem(e);
  };

  return (
    <div className="div-header-button">
      <div className="div-icone-wasfaty">
        <img
          className="img-header"
          src={logo}
          onClick={(e) => handleClickIcone(e)}
        ></img>
      </div>
      <div className="div-buttons">
        <a href={"/"}>
          <Button
            className="options-button"
            backgroundColor="#22D5CB"
            label="Order prescription"
            size="md"
            color="white"
            borderRadius={5}
            handleClick={() => {}}
          ></Button>
        </a>
        <a>
          <Button
            className="options-button"
            backgroundColor="transparent"
            label="Refill Prescription"
            size="md"
            color="black"
            borderRadius={5}
            handleClick={() => {}}
          ></Button>
        </a>
        <a>
          <Button
            className="options-button"
            backgroundColor="transparent"
            label="Virtual Pharmacy"
            size="md"
            color="black"
            borderRadius={5}
            handleClick={() => {}}
          ></Button>
        </a>
        <a>
          <Button
            className="options-button"
            backgroundColor="transparent"
            label="My Order"
            size="md"
            color="black"
            borderRadius={5}
            handleClick={() => {}}
          ></Button>
        </a>
      </div>
      <div className="div-images-button">
        <div className="div-images-icon">
          <img src={Heart}></img>
          <img src={Bag}></img>
        </div>
        <a>
          <Button
            backgroundColor="#22D5CB"
            label="Signin"
            size="md"
            color="white"
            borderRadius={5}
            handleClick={(e) => handleClick(e)}
          ></Button>
        </a>
      </div>
      <div>
        <img src={Group}></img>
      </div>
    </div>
  );
}

export default Header;
