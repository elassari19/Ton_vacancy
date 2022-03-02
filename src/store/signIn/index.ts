import { SIGN_IN, SIGN_OUT } from "./constants";

type Istate = {
  auth: boolean
}

type Iaction = {
  type: string;
}

const initialState = {
  auth: false
}

const signInReducer = (state: Istate = initialState, action: Iaction) => {
  switch (action.type) {
    case SIGN_IN:
      return { auth: true };
    
    case SIGN_OUT:
      return { auth: false };

    default:
      return state;
  }
}

export default signInReducer;