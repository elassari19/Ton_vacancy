import axios from "axios";
import Cookies from "js-cookie";
import { Dispatch } from "redux";
import { ISignin } from "types";
import {
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  SIGN_OUT_REQUEST,
  SIGN_OUT_SUCCESS,
  SIGN_OUT_FAILURE,
} from "./constants";

export const signIn = (value: ISignin) => async (dispatch: Dispatch) => {
  // bein user signin
  dispatch({ type: SIGN_IN_REQUEST });

  // request signin
  try {
    const { data: res } = await axios.post(
      `${process.env.BASE_URL}/signin`,
      value
    );

    // success signin
    if (res.success) {
      dispatch({
        type: SIGN_IN_SUCCESS,
        payload: { id: res.id, token: res.token, permission: res.permission },
      });
    }

    // console.log("res", res);

    Cookies.set("vacancy", res.token, { expires: 30 });

    localStorage.setItem("vacancy", JSON.stringify(res));

    // failure signin
    !res.success &&
      dispatch({
        type: SIGN_IN_FAILURE,
        payload: { error: res.message },
      });

    // failure signin
  } catch (error) {
    dispatch({ type: SIGN_IN_FAILURE, payload: error });
  }
};

// signout actions
export const signOut = () => async (dispatch: Dispatch) => {
  // bein signout
  dispatch({ type: SIGN_OUT_REQUEST });

  try {
    const { data: res } = await axios.get(`${process.env.BASE_URL}/signout`, {
      headers: { Authorization: `Bearer ${Cookies.get("vacancy")}` },
    });
    console.log("res", res);
    // failure signin
    !res.success &&
      dispatch({
        type: SIGN_OUT_FAILURE,
        payload: { error: res.message },
      });

    // success signin
    if (res.success) {
      Cookies.remove("vacancy");

      localStorage.removeItem("vacancy");

      dispatch({
        type: SIGN_OUT_SUCCESS,
        payload: { id: "", token: "" },
      });
    }
  } catch (error) {
    dispatch({ type: SIGN_OUT_FAILURE, payload: error });
  }
};
