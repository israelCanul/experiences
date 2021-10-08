import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { getAllParamsFromUrl } from "./libs/helpers";
import { setCookieForm } from "./libs/cookieManager";
let params = getAllParamsFromUrl();
if (params) {
  if (params.lang)
    setCookieForm("Language", params.lang === "es" ? "es-MX" : "en-US");
}
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
