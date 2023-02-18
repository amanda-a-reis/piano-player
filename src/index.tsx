import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import Play from "./Play";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <div className="app">
      <div className="bg"></div>
      <Play />
    </div>
  </React.StrictMode>
);
