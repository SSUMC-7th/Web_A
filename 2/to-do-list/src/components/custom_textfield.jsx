import React from "react";

export default function CustomTextField({
  className = "",
  value = null,
  defaultValue = null,
  setText = () => {},
}) {
  return (
    <input
      className={"TextfieldStyle " + className}
      type="text"
      value={value}
      defaultValue={defaultValue}
      onChange={(e) => setText(e.target.value)}
    />
  );
}
