import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { Provider } from "mobx-react";
import AppleBasket from "./store";
import "./styles/appleBasket.less";
import "./styles/appleItem.less";

ReactDOM.render(
  <Provider AppleBasket={AppleBasket}>
    <App />
  </Provider>,
  document.getElementById("root")
);
