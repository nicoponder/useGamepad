import React from "react";
import "./styles.css";
import useGamepad from "./useGamepad";

export default function App() {
  useGamepad({
    onConnect: () => console.log("connected"),
    onDisconnect: () => console.log("disconnected")
  });
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
