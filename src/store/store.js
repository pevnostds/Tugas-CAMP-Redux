import { thunk } from "redux-thunk";
import { createStore,applyMiddleware,compose } from "redux";
import { rootReducer } from "./reducers";

export const store = createStore(rootReducer, compose(applyMiddleware(thunk)));