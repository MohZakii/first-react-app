import { createStore, compose, applyMiddleware } from "redux";
import reducer from "./reducers/root";
import { isDev } from "../config";
import thunk from "redux-thunk";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = isDev
  ? createStore(reducer, composeEnhancer(applyMiddleware(thunk)))
  : createStore(reducer, applyMiddleware(thunk));

export default store;
