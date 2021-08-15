import { createStore, combineReducers } from "redux";

import user from "../reducers/user";
import auth from "../reducers/auth";

const reducer = combineReducers({ user, auth });

const store = createStore(reducer);
window.store = store;

export default store;
