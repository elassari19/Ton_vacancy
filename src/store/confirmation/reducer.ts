/* eslint-disable react-hooks/rules-of-hooks */
import {
  CONFIRMATION_IN_FAILURE,
  CONFIRMATION_IN_REQUEST,
  CONFIRMATION_IN_SUCCESS,
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
    case CONFIRMATION_IN_REQUEST:
      return { ...state, isLoading: true };

    case CONFIRMATION_IN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        success: action.payload.success,
        message: action.payload.message,
        error: "",
      };

    case CONFIRMATION_IN_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        success: action.payload.success,
        isLoading: false,
      };

    default:
      return state;
  }
};

export default reducer;
