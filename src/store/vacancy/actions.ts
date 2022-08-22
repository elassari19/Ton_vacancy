import axios from "axios";
import Cookies from "js-cookie";
import { Dispatch } from "redux";
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

export const vacancyGetOne = (value: string) => async (dispatch: Dispatch) => {
  console.log("vacancy action store");
  // bein
  dispatch({ type: VACANCY_GET_ONE_REQUEST });

  // request
  let res;
  try {
    res = await axios.get(`${process.env.BASE_URL}/vacancy?id=${value}`);

    console.log(res);

    // success
    if (res.data.success) {
      dispatch({ type: VACANCY_GET_ONE_SUCCESS, payload: res.data });
    }

    // failure
    if (!res.data.success) {
      dispatch({ type: VACANCY_GET_ONE_FAILURE, payload: res });
    }

    // failure
  } catch (error) {
    dispatch({ type: VACANCY_GET_ONE_FAILURE, payload: error });
  }
};

export const vacancyGetALL = (value: string) => async (dispatch: Dispatch) => {
  console.log("vacancy action store");
  // bein
  dispatch({ type: VACANCY_GET_ALL_REQUEST });

  // request
  let res;
  try {
    res = await axios.get(`${process.env.BASE_URL}/vacancy/all`);

    console.log(res);

    // success
    if (res.data.success) {
      dispatch({ type: VACANCY_GET_ALL_SUCCESS, payload: res.data });
    }

    // failure
    if (!res.data.success) {
      dispatch({ type: VACANCY_GET_ALL_FAILURE, payload: res });
    }

    // failure
  } catch (error) {
    dispatch({ type: VACANCY_GET_ALL_FAILURE, payload: error });
  }
};

export const vacancyDeleteAll = () => async (dispatch: Dispatch) => {
  console.log("vacancy action store");
  // bein
  dispatch({ type: VACANCY_DELETE_ALL_REQUEST });

  // request
  let res;
  try {
    res = await axios.delete(`${process.env.BASE_URL}/vacancy/delete_all`);

    console.log(res);

    // success
    if (res.data.success) {
      dispatch({ type: VACANCY_DELETE_ALL_SUCCESS, payload: res.data });
    }

    // failure
    if (!res.data.success) {
      dispatch({ type: VACANCY_DELETE_ALL_FAILURE, payload: res });
    }

    // failure
  } catch (error) {
    dispatch({ type: VACANCY_DELETE_ALL_FAILURE, payload: error });
  }
};

export const vacancyDeleteOne =
  (value: string) => async (dispatch: Dispatch) => {
    console.log("vacancy action store");
    // bein
    dispatch({ type: VACANCY_DELETE_ONE_REQUEST });

    // request
    let res;
    try {
      res = await axios.delete(
        `${process.env.BASE_URL}/vacancy/delete?=${value}`
      );

      console.log(res);

      // success
      if (res.data.success) {
        dispatch({ type: VACANCY_DELETE_ONE_SUCCESS, payload: res.data });
      }

      // failure
      if (!res.data.success) {
        dispatch({ type: VACANCY_DELETE_ONE_FAILURE, payload: res });
      }

      // failure
    } catch (error) {
      dispatch({ type: VACANCY_DELETE_ONE_FAILURE, payload: error });
    }
  };

export const vacancyUpdate = (value: string) => async (dispatch: Dispatch) => {
  console.log("vacancy action store");
  // bein
  dispatch({ type: VACANCY_UPDATE_REQUEST });

  // request
  let res;
  try {
    res = await axios.put(`${process.env.BASE_URL}/vacancy/update?=${value}`);

    console.log(res);

    // success
    if (res.data.success) {
      dispatch({ type: VACANCY_UPDATE_SUCCESS, payload: res.data });
    }

    // failure
    if (!res.data.success) {
      dispatch({ type: VACANCY_UPDATE_FAILURE, payload: res });
    }

    // failure
  } catch (error) {
    dispatch({ type: VACANCY_UPDATE_FAILURE, payload: error });
  }
};

export const vacancyCreate =
  (value: Ivacancy) => async (dispatch: Dispatch) => {
    console.log("vacancy action store");
    // bein
    dispatch({ type: VACANCY_CREATE_REQUEST });

    // request
    let res;
    try {
      res = await axios.post(`${process.env.BASE_URL}/vacancy/create`, {
        ...value,
        cookies: Cookies.get("vacancy"),
      });

      console.log(res);

      // success
      if (res.data.success) {
        dispatch({ type: VACANCY_CREATE_SUCCESS, payload: res.data });
      }

      // failure
      if (!res.data.success) {
        dispatch({ type: VACANCY_CREATE_FAILURE, payload: res });
      }

      // failure
    } catch (error) {
      dispatch({ type: VACANCY_CREATE_FAILURE, payload: error });
    }
  };
