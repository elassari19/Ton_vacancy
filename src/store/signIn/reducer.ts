/* eslint-disable react-hooks/rules-of-hooks */
import useGetStorage from "customeHooks/useGetStorage";
import Cookies from "js-cookie";
import {
  SIGN_IN_FAILURE,
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_OUT_FAILURE,
  SIGN_OUT_REQUEST,
  SIGN_OUT_SUCCESS,
} from "./constants";

const storage = useGetStorage("vacancy");

type Istate = {
  success: boolean;
  id: string | undefined;
  token: string;
  isLoading: boolean;
  error: string;
  permission: string;
};

type Iaction = {
  type: string;
  payload: any;
};

const initialState = {
  id: storage?.id || "",
  token: Cookies.get("vacancy") || "",
  isLoading: false,
  error: "",
  success: false,
  permission: "",
};

const reducer = (state: Istate = initialState, action: Iaction) => {
  switch (action.type) {
    case SIGN_IN_REQUEST:
      return { ...state, isLoading: true };

    case SIGN_IN_SUCCESS:
      return {
        ...state,
        success: true,
        token: action.payload.token,
        id: action.payload.id,
        permission: action.payload.permission,
        isLoading: false,
        error: "",
      };

    case SIGN_IN_FAILURE:
      return {
        ...state,
        success: false,
        error: action.payload,
        isLoading: false,
      };

    case SIGN_OUT_REQUEST:
      return { ...state, isLoading: true };

    case SIGN_OUT_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
        id: action.payload.id,
        isLoading: false,
        error: "",
      };

    case SIGN_OUT_FAILURE:
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
