import { applyMiddleware, createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
import infoReducer from "./info";

const rootReducer = combineReducers({
  companyInfo: infoReducer
});

const Store = createStore(rootReducer,{},applyMiddleware(thunk));

export type State = ReturnType<typeof rootReducer>;
export default Store;