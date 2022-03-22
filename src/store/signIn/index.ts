import useGetStorage from "customeHooks/useGetStorage";
import { SIGN_IN, SIGN_OUT } from "./constants";

type Istate = {
  auth: boolean
}

type Iaction = {
  type: string;
}

const initialState = {
  auth: useGetStorage('auth')
}

const signInReducer = (state: Istate = initialState, action: Iaction) => {
  switch (action.type) {
    case SIGN_IN:
      localStorage.setItem('auth', JSON.stringify({auth: true}));
      return { auth: true };
    
    case SIGN_OUT:
      localStorage.setItem('auth', JSON.stringify({auth: false}));
      return { auth: false };

    default:
      return state;
  }
}

export default signInReducer;