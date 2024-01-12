import "./styles.css";
import ExtensibleTextInput from "./ExtensibleTextInput";
import React from "react";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <ExtensibleTextInput size={10} />
      <input size={10} />
    </div>
  );
}
