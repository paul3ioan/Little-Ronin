import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import EmailForm from "./EmailForm";
import store from "./redux/store";
import { Provider } from "react-redux";
if(document.getElementById("mintingButton"))
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("mintingButton")
);
ReactDOM.render(
  <EmailForm />,
  document.getElementById('email-form')
);
