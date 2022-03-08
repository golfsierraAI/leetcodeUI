import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import HomePage from "./HomePage";
import store from "./Store/store";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <HomePage />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
