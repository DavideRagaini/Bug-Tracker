import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "react-redux";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import App from "./App";

// Reducers
import authReducer from "./Controllers/Redux/authSlice";
import bugReducer from "./controllers/Redux/bugSlice";
import userReducer from "./controllers/Redux/userSlice";

// Redux configure
const rootReducer = combineReducers({
  auth: authReducer,
  bug: bugReducer,
  user: userReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
