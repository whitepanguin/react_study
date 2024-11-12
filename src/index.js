import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// redux 코드 추가
import { legacy_createStore as createStore } from "redux";
import { Provider } from "react-redux";
import { devToolsEnhancer } from "@redux-devtools/extension";
import rootReduer from "./modules";
import { BrowserRouter } from "react-router-dom";

// 스토어
const store = createStore(rootReduer, devToolsEnhancer());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <>
      <Provider store={store}>
        <App />
      </Provider>
    </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
