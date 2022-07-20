import { applyMiddleware, createStore, combineReducers } from "redux";
<<<<<<< HEAD
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import infoReducer from "./info";
import vacancyReducer from "./vacancy";
import privacyReducer from "./privacy";
import { signupReducer } from "./signUp";
import { signinReducer } from "./signIn";
import { resendReducer } from "./resend";
import { confirmationReducer } from "./confirmation";

const rootReducer = combineReducers({
  companyInfo: infoReducer,
  signUp: signupReducer,
  signIn: signinReducer,
  vacancy: vacancyReducer,
  privacy: privacyReducer,
  resend: resendReducer,
  confirmation: confirmationReducer,
});

const Store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(thunk))
);

export type IState = ReturnType<typeof rootReducer>;
export default Store;
=======
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import infoReducer from "./info";
import signUpReducer from "./signUp";
import signInReducer from "./signIn";

const rootReducer = combineReducers({
  companyInfo: infoReducer,
  signUp: signUpReducer,
  auth: signInReducer
});

const Store = createStore(rootReducer,{},composeWithDevTools(applyMiddleware(thunk)));

export type State = ReturnType<typeof rootReducer>;
export default Store;
>>>>>>> f8a607d17099ca218811c66bc43c75a80cbe2df5
