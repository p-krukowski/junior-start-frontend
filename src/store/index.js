import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import rootReducer from "../reducers";
import { createLogger } from "redux-logger";

const loggerMiddleware = createLogger();

let middleware = [thunk];

if (process.env.NODE_ENV !== "production") {
  middleware = [...middleware, loggerMiddleware];
}

export const store = createStore(rootReducer, applyMiddleware(...middleware));
