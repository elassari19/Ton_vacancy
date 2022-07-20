<<<<<<< HEAD
import signupReducer from "./reducer";
import { signUp } from "./actions";

export { signupReducer, signUp };
=======
import { SIGN_UP } from "./constants";

type Istate = {
  employer: boolean
}

type Iaction = {
  type: string;
  payload: boolean
}

const initialState = {
  employer: false
}

const signUpReducer = (state: Istate = initialState, action: Iaction) => {
  switch (action.type) {
    case SIGN_UP:
      return { employer: action.payload };
  
    default:
      return state;
  }
}

export default signUpReducer;
>>>>>>> f8a607d17099ca218811c66bc43c75a80cbe2df5
