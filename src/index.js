import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./redux/store";
import { Provider } from "react-redux";
if(document.getElementById("buttonReact1"))
ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
    <App id={1} />
  </Provider>
  </React.StrictMode>,
  document.getElementById("buttonReact1")
);
if(document.getElementById("buttonReact2"))
ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
    <App id={2} />
  </Provider>
  </React.StrictMode>,
  document.getElementById("buttonReact2")
);
if(document.getElementById("buttonReact3"))
ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
    <App id={3} />
  </Provider>
  </React.StrictMode>,
  document.getElementById("buttonReact3")
);
if(document.getElementById("buttonReact4"))
ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
    <App id={4} />
  </Provider>
  </React.StrictMode>,
  document.getElementById("buttonReact4")
);