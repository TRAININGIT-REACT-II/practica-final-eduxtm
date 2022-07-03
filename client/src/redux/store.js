import { applyMiddleware, createStore, combineReducers, compose } from "redux";
//import configureStore from '@reduxjs/toolkit'

import appReducer from "./reducers/app";
import userReducer from "./reducers/user";
import notesReducer from "./reducers/note";

import logger from "./middelwares/logger";

// Versión Redux
const reducer = combineReducers({
  app: appReducer,
  user: userReducer,
  notes: notesReducer,
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancer(applyMiddleware(logger)));

// Versión @reduxjs/toolkit
// const store = configureStore({
//     reducer,
// })

export default store;
