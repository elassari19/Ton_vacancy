import { applyMiddleware, createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
import infoReducer from "./info";
import signUpReducer from "./signUp";
import signInReducer from "./signIn";

const rootReducer = combineReducers({
  companyInfo: infoReducer,
  signUp: signUpReducer,
  auth: signInReducer
});

const Store = createStore(rootReducer,{},applyMiddleware(thunk));

export type State = ReturnType<typeof rootReducer>;
export default Store;