/* eslint-disable react-hooks/rules-of-hooks */
import useGetStorage from "customeHooks/useGetStorage";
import Cookies from "js-cookie";
import {
  RESEND_IN_FAILURE,
  RESEND_IN_REQUEST,
  RESEND_IN_SUCCESS,
} from "./constants";

const storage = useGetStorage("vacancy");

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
    case RESEND_IN_REQUEST:
      return { ...state, isLoading: true };

    case RESEND_IN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        success: action.payload.success,
        message: action.payload.message,
      };

    case RESEND_IN_FAILURE:
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
