import React, { FC } from "react";

type TextFieldProps = {
  className: string;
  placeholder: string;
  size: "sm" | "md" | "lg" | "sq";
  borderRadius: number;
  label?: string;
  type: string;
  border?: string;
  color?: string;
  value?: string | number;
  maxLength?: number;
  ref?: any;
  handleChange?: (any) => void;
};

const TextField: FC<TextFieldProps> = ({
  className = "",
  placeholder = "",
  size,
  color = "black",
  handleChange,
  borderRadius = 0,
  label = "",
  type = "text",
  border = "",
  value = null,
  maxLength,
  ref,
}) => {
  let scale = 4;
  if (size === "sm") {
    scale = 3;
  } else if (size === "lg") {
    scale = 8;
  }
  const style = {
    border,
    borderRadius,
    padding: `${scale * 0.2}rem ${scale * 1}rem`,
    color,
  };
  return (
    <div>
      <label>{label}</label>
      <input
        ref={ref}
        maxLength={maxLength}
        value={value}
        className={className}
        type={type}
        onChange={handleChange}
        style={style}
        placeholder={placeholder}
      ></input>
    </div>
  );
};

export default TextField;
