import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./containers/App";
import registerServiceWorker from "./registerServiceWorker";
import "tachyons";
import { Provider } from "react-redux";
import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
} from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import { searchRobots, fetchRobots } from "./reducers";

const logger = createLogger();
const rootReducers = combineReducers({ searchRobots, fetchRobots });
const store = createStore(rootReducers, applyMiddleware(thunk, logger));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
registerServiceWorker();
