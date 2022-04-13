import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import "moment/locale/pl";
import moment from "moment";

moment.locale("pl");

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
