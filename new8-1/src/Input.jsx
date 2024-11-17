import React from "react";

function Input({ value, onChange, className, placeholder }) {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      className={className}
      placeholder={placeholder}
    />
  );
}

export default Input;
