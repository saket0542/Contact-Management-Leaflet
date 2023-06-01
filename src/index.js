import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { configureStore } from "@reduxjs/toolkit";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import { contactReducer } from "./redux/Reducers/contactReducer";


const store = configureStore({
  reducer: contactReducer,
  devTools: true // Enable Redux DevTools Extension
});

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);