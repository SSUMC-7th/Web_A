const Input = ({ className, value, onChange, placeholder, onKeyDown, onCompositionStart, onCompositionEnd }) =>{
  return (
    <input
      type="text"
      className={className}
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      placeholder={placeholder}
      onCompositionStart={onCompositionStart}
      onCompositionEnd={onCompositionEnd}
    />
  );
}

export default Input;