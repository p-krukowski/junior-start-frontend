import { createStore, applyMiddleware } from "redux";

import createSagaMiddleware from "redux-saga";

import rootReducer from "../reducers";
import { createLogger } from "redux-logger";

const sagaMiddleware = createSagaMiddleware();
const loggerMiddleware = createLogger();

let middleware = [sagaMiddleware];

if (process.env.NODE_ENV !== "production") {
  middleware = [...middleware, loggerMiddleware];
}

export const store = createStore(rootReducer, applyMiddleware(...middleware));
