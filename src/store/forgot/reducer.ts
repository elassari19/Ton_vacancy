/* eslint-disable react-hooks/rules-of-hooks */
import {
  FORGOT_IN_FAILURE,
  FORGOT_IN_REQUEST,
  FORGOT_IN_SUCCESS,
} from "./constants";

type Istate = {
  success: boolean;
  error: string;
  isLoading: boolean;
  message: string;
};

type Iaction = {
  type: string;
  payload: any;
};

const initialState = {
  success: false,
  isLoading: false,
  error: "",
  message: "",
};

const reducer = (state: Istate = initialState, action: Iaction) => {
  switch (action.type) {
    case FORGOT_IN_REQUEST:
      return { ...state, isLoading: true };

    case FORGOT_IN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        success: true,
        message: action.payload,
        error: "",
      };

    case FORGOT_IN_FAILURE:
      return {
        ...state,
        error: action.payload,
        success: false,
        isLoading: false,
      };

    default:
      return state;
  }
};

export default reducer;
