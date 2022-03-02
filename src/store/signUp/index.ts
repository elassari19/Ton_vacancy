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