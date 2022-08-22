import { Ivacancy } from "types";
import {
  VACANCY_GET_ONE_FAILURE,
  VACANCY_GET_ONE_REQUEST,
  VACANCY_GET_ONE_SUCCESS,
  VACANCY_GET_ALL_FAILURE,
  VACANCY_GET_ALL_REQUEST,
  VACANCY_GET_ALL_SUCCESS,
  VACANCY_DELETE_ALL_FAILURE,
  VACANCY_DELETE_ALL_REQUEST,
  VACANCY_DELETE_ALL_SUCCESS,
  VACANCY_DELETE_ONE_FAILURE,
  VACANCY_DELETE_ONE_REQUEST,
  VACANCY_DELETE_ONE_SUCCESS,
  VACANCY_UPDATE_FAILURE,
  VACANCY_UPDATE_REQUEST,
  VACANCY_UPDATE_SUCCESS,
  VACANCY_CREATE_FAILURE,
  VACANCY_CREATE_REQUEST,
  VACANCY_CREATE_SUCCESS,
} from "./constants";

type Istate = {
  success: boolean;
  isLoading: boolean;
  error: string;
  message: string;
  vacancy: any;
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
  vacancy: [],
};

const reducer = (state: Istate = initialState, action: Iaction) => {
  const { type, payload } = action;

  switch (type) {
    // get one vacancy
    case VACANCY_GET_ONE_REQUEST:
      return { ...state, isLoading: true };

    case VACANCY_GET_ONE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        success: payload.success,
        message: payload.message,
        error: "",
        vacancy: payload.vacancy,
      };

    case VACANCY_GET_ONE_FAILURE:
      return {
        ...state,
        isLoading: false,
        success: payload.success,
        message: payload.message,
        error: payload.message,
        vacancy: [],
      };

    // get all vacancies
    case VACANCY_GET_ALL_REQUEST:
      return { ...state, isLoading: true };

    case VACANCY_GET_ALL_SUCCESS:
      return {
        ...state,
        isLoading: false,
        success: payload.success,
        message: payload.message,
        error: "",
        vacancy: payload.vacancy,
      };

    case VACANCY_GET_ALL_FAILURE:
      return {
        ...state,
        isLoading: false,
        success: payload.success,
        message: payload.message,
        error: payload.message,
        vacancy: [],
      };

    // delete all vacancies
    case VACANCY_DELETE_ALL_REQUEST:
      return { ...state, isLoading: true };

    case VACANCY_DELETE_ALL_SUCCESS:
      return {
        ...state,
        isLoading: false,
        success: payload.success,
        message: payload.message,
        error: "",
        vacancy: payload.vacancy,
      };

    case VACANCY_DELETE_ALL_FAILURE:
      return {
        ...state,
        isLoading: false,
        success: payload.success,
        message: payload.message,
        error: payload.message,
        vacancy: [],
      };

    // delete one vacancies
    case VACANCY_DELETE_ONE_REQUEST:
      return { ...state, isLoading: true };

    case VACANCY_DELETE_ONE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        success: payload.success,
        message: payload.message,
        error: "",
        vacancy: payload.vacancy,
      };

    case VACANCY_DELETE_ONE_FAILURE:
      return {
        ...state,
        isLoading: false,
        success: payload.success,
        message: payload.message,
        error: payload.message,
        vacancy: [],
      };

    // update vacancy
    case VACANCY_UPDATE_REQUEST:
      return { ...state, isLoading: true };

    case VACANCY_UPDATE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        success: payload.success,
        message: payload.message,
        error: "",
        vacancy: payload.vacancy,
      };

    case VACANCY_UPDATE_FAILURE:
      return {
        ...state,
        isLoading: false,
        success: payload.success,
        message: payload.message,
        error: payload.message,
        vacancy: [],
      };

    // create vacancy
    case VACANCY_CREATE_REQUEST:
      return { ...state, isLoading: true };

    case VACANCY_CREATE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        success: payload.success,
        message: payload.message,
        error: "",
        vacancy: payload.vacancy,
      };

    case VACANCY_CREATE_FAILURE:
      return {
        ...state,
        isLoading: false,
        success: payload.success,
        message: payload.message,
        error: payload.message,
        vacancy: [],
      };

    default:
      return state;
  }
};

export default reducer;
