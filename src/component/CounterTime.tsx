import React, { FC } from "react";
import TextField from "../component/TextField";
import Button from "../component/Button";
import VerificationInput from "react-verification-input";

const CountDownTimer = ({ handelchangeVal, minutes = 0, seconds = 60 }) => {
  const [time, setTime] = React.useState({ minutes, seconds });
  const [borderColor, setBorderColor] = React.useState("#E1E8F1");
  const [textColor, setTextColor] = React.useState("black");
  const [isValid, setIsValid] = React.useState(true);

  const tick = () => {
    if (time.minutes === 0 && time.seconds === 0) reset();
    else if (time.seconds === 0) {
      setTime({ minutes: time.minutes - 1, seconds: 59 });
    } else {
      setTime({ minutes: time.minutes, seconds: time.seconds - 1 });
    }
  };
  const handleResnd = () => {
    setTime({ ...time, minutes: minutes, seconds: seconds });
    setBorderColor((borderColor) => "black");
    setTextColor((textColor) => "black");
    setIsValid((isValid) => true);
  };

  const reset = () => {
    setTime({ minutes: time.minutes, seconds: time.seconds });
    setBorderColor((borderColor) => "#973149");
    setTextColor((textColor) => "#973149");
    setIsValid((isValid) => false);
  };
  React.useEffect(() => {
    const timerId = setInterval(() => tick(), 1000);
    return () => clearInterval(timerId);
  });

  const handleChange = (event) => {
    console.log(event.target.className.split(" ")[2]);
    let key = event.target.className.split(" ")[2];
    console.log(key.split("-"));
    let fieldIntIndex = Number(key.split("-")[1]);
    console.log("val", event.target.value);
    if (isValid === true) {
      handelchangeVal(event);
      const nextfield = document.querySelector(
        `.field-${fieldIntIndex + 1}`
      ) as HTMLElement | null;
      if (nextfield !== null) {
        nextfield.focus();
      }
    } else {
      alert("You should resend the code");
    }
  };

  return (
    <div>
      {!isValid && (
        <div className="div-Resend">
          <Button
            className="button-resendCode"
            backgroundColor="transparent"
            label="Resend Code"
            size="md"
            color="#E05729"
            borderRadius={5}
            handleClick={handleResnd}
          ></Button>
        </div>
      )}
      {isValid && (
        <div className="div-counterTime">
          <div>You will receive it by:</div>
          <div>
            <p>{`${time.minutes.toString().padStart(2, "0")}:${time.seconds
              .toString()
              .padStart(2, "0")}`}</p>
          </div>
        </div>
      )}

      <div className="div-confirmCode-input">
        <TextField
          className="TextField-codeConfirm firstNumber field-1"
          placeholder=""
          size="md"
          type="text"
          handleChange={(e) => handleChange(e)}
          borderRadius={10}
          border={`1px solid ${borderColor}`}
          color={textColor}
          maxLength={1}
        />
        <TextField
          className="TextField-codeConfirm secondNumber field-2"
          placeholder=""
          size="md"
          type="text"
          handleChange={(e) => handleChange(e)}
          borderRadius={10}
          border={`1px solid ${borderColor}`}
          color={textColor}
          maxLength={1}
        />
        <TextField
          className="TextField-codeConfirm thirdNumber field-3"
          placeholder=""
          size="md"
          type="text"
          handleChange={(e) => handleChange(e)}
          borderRadius={10}
          border={`1px solid ${borderColor}`}
          color={textColor}
          maxLength={1}
        />
        <TextField
          className="TextField-codeConfirm fourthNumber field-4"
          placeholder=""
          size="md"
          type="text"
          handleChange={(e) => handleChange(e)}
          borderRadius={10}
          border={`1px solid ${borderColor}`}
          color={textColor}
          maxLength={1}
        />

        {/* <VerificationInput
  classNames={{
    container: "container",
    character: "character",
    characterInactive: "character--inactive",
    characterSelected: "character--selected",
  }}
           onChange={(e) => handleChange(e)}

/> */}
      </div>
    </div>
  );
};

export default CountDownTimer;
