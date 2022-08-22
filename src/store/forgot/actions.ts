import axios from "axios";
import { Dispatch } from "redux";
import { ISignin } from "types";
import {
  FORGOT_IN_FAILURE,
  FORGOT_IN_REQUEST,
  FORGOT_IN_SUCCESS,
} from "./constants";

export const forgotPssword = (value: string) => async (dispatch: Dispatch) => {
  // bein FORGOT
  dispatch({ type: FORGOT_IN_REQUEST });

  // request FORGOT
  try {
    const { data: res } = await axios.post(`${process.env.BASE_URL}/forgot`, {
      email: value,
    });

    console.log("action", res);

    // failure FORGOT
    !res.success &&
      dispatch({
        type: FORGOT_IN_FAILURE,
        payload: res.message,
      });

    // success FORGOT
    if (res.success) {
      dispatch({
        type: FORGOT_IN_SUCCESS,
        payload: res.message,
      });
    }

    // failure FORGOT
  } catch (error) {
    dispatch({
      type: FORGOT_IN_FAILURE,
      payload: error,
    });
  }
};
