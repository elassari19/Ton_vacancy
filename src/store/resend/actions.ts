import axios from "axios";
import { Dispatch } from "redux";
import { ISignin } from "types";
import {
  RESEND_IN_FAILURE,
  RESEND_IN_REQUEST,
  RESEND_IN_SUCCESS,
} from "./constants";

export const Resend = (value: ISignin) => async (dispatch: Dispatch) => {
  // bein user signin
  dispatch({ type: RESEND_IN_REQUEST });

  // request RESEND
  try {
    const { data: res } = await axios.post(
      `${process.env.BASE_URL}/resend`,
      value
    );

    // failure RESEND
    !res.success &&
      dispatch({
        type: RESEND_IN_FAILURE,
        payload: { success: false, error: res.message },
      });

    // success RESEND
    if (res.success) {
      dispatch({
        type: RESEND_IN_SUCCESS,
        payload: { success: true, message: res.message, error: "" },
      });
    }

    // failure RESEND
  } catch (error) {
    dispatch({
      type: RESEND_IN_FAILURE,
      payload: { success: false, error: error },
    });
  }
};
