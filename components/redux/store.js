import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { UserReducer } from "./reducer";

// for combinig reducers
const rootReducer = combineReducers({UserReducer})

export const Store = createStore(rootReducer,applyMiddleware(thunk));

