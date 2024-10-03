import React from "react";

export default function CustomButton({
  className = "",
  text = "",
  callback = () => {},
}) {
  return (
    <button className={"DefaultButtonStyle " + className} onClick={callback}>
      {text}
    </button>
  );
}
