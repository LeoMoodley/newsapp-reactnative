import { applyMiddleware, combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import newsReducer from "./reducers/newsReducer";

const rootReducer = combineReducers({
  news: newsReducer,
});

const middleware = composeWithDevTools(applyMiddleware(thunk));

// createStore is now configureStore
export default configureStore({ reducer: rootReducer }, middleware);
