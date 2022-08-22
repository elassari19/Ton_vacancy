import { SIGN_UP_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS } from "./constants";

type Istate = {
  success: boolean;
  isLoading: boolean;
  error: string;
  message: string;
};

type Iaction = {
  type: string;
  payload: Istate;
};

const initialState = {
  success: false,
  isLoading: false,
  error: "",
  message: "",
};

const reducer = (state: Istate = initialState, action: Iaction) => {
  const { type, payload } = action;

  switch (type) {
    case SIGN_UP_REQUEST:
      return { ...state, isLoading: true };

    case SIGN_UP_SUCCESS:
      return {
        ...state,
        isLoading: false,
        success: payload.success,
        message: payload.message,
        error: "",
      };

    case SIGN_UP_FAILURE:
      return {
        ...state,
        isLoading: false,
        success: payload.success,
        message: payload.message,
        error: payload.message,
      };

    default:
      return state;
  }
};

export default reducer;
