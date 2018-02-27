import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import mlStore from "./stores/mlStore";
import App from "./containers/App";

import "./styles/index.css";

render(
  <Provider store={mlStore()}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
