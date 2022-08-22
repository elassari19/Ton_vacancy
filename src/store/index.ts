import { applyMiddleware, createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import infoReducer from "./info";
import privacyReducer from "./privacy";
import { signupReducer } from "./signUp";
import { signinReducer } from "./signIn";
import { resendReducer } from "./resend";
import { confirmationReducer } from "./confirmation";
import { forgotReducer } from "./forgot";
import { vacancyReducer } from "./vacancy";

const rootReducer = combineReducers({
  companyInfo: infoReducer,
  signUp: signupReducer,
  signIn: signinReducer,
  vacancy: vacancyReducer,
  privacy: privacyReducer,
  resend: resendReducer,
  confirmation: confirmationReducer,
  forgot: forgotReducer,
});

const Store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(thunk))
);

export type IState = ReturnType<typeof rootReducer>;
export default Store;
