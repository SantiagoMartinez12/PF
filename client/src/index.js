import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import store from "./store/index";
import { Provider } from "react-redux";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0Provider
        domain="dev-19ulquy6.us.auth0.com"
        clientId="p8APxRRiu5BBYtX3SLkreNxZxJtcLilT"
        redirectUri={window.location.origin}
      >
        <Provider store={store}>
          <App />
        </Provider>
      </Auth0Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
