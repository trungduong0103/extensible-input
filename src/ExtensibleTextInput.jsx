import React from "react";

// Not textarea friendly
function ExtensibleInput({ size, label, value, onChange, ...otherProps }) {
  const inputRef = React.useRef(null);

  React.useLayoutEffect(() => {
    const inputValueLength = inputRef.current.value.length;
    if (size) {
      inputRef.current?.setAttribute("size", size);
    } else {
      inputRef.current?.setAttribute("size", inputValueLength + 1);
    }
  }, []);

  function handleChange() {
    console.log(inputRef.current.value.length);
    const inputValueLength = inputRef.current.value.length;
    if (inputValueLength < size) return;

    if (inputValueLength) {
      return inputRef.current.setAttribute(
        "size",
        inputRef.current.value.length
      );
    }
  }

  return (
    <label>
      <input onChange={handleChange} ref={inputRef} {...otherProps} />
    </label>
  );
}

export default ExtensibleInput;
