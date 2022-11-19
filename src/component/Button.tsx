import React, { FC } from "react";
import PropTypes, { string } from "prop-types";

type ButtonFieldProps = {
  className?: string;
  label: string;
  backgroundColor: string;
  size: "sm" | "md" | "lg";
  color: string;
  border?: string;
  borderRadius: number;
  boxShadow?: string;
  type?: "submit" | "button" | "reset";
  handleClick?: (any) => void;
};

const Button: FC<ButtonFieldProps> = ({
  className = "",
  label,
  backgroundColor = "white",
  size = "md",
  color,
  border = "none",
  borderRadius = 0,
  boxShadow = "",
  type,
  handleClick,
}) => {
  let scale = 1;
  if (size === "sm") {
    scale = 0.75;
  }
  if (size === "lg") {
    scale = 1.5;
  }
  const style = {
    color,
    backgroundColor,
    padding: `${scale * 0.5}rem ${scale * 1}rem`,
    border,
    borderRadius,
    boxShadow,
  };
  return (
    <button
      className={className}
      onClick={handleClick}
      type={type}
      style={style}
    >
      {label}
    </button>
  );
};

export default Button;
