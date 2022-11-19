import React from "react";
import TextField from "../component/TextField";
import Button from "../component/Button";
import Header from "component/Header";
import Bodyimage from "../assest/Bodyimage.png";
import Homeimg from "../assest/Homeimg.png";
import HomeImageBackground from "../assest/Group5494.png";
function Body({ opacity, backgroundColor }) {
  const styleImage = {
    opacity: opacity,
  };
  const StyleBackground = {
    backgroundColor: backgroundColor,
  };
  return (
    <div className="div-image-background" style={StyleBackground}>
      <img
        className="image-background"
        src={HomeImageBackground}
        style={styleImage}
      ></img>
    </div>
  );
}

export default Body;
