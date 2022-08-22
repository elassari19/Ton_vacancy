import axios from "axios";
import { Dispatch } from "redux";
import { IConfirm } from "types";
import {
  CONFIRMATION_IN_FAILURE,
  CONFIRMATION_IN_REQUEST,
  CONFIRMATION_IN_SUCCESS,
} from "./constants";

export const Confirmation = (value: IConfirm) => async (dispatch: Dispatch) => {
  // bein user CONFIRMATION
  dispatch({ type: CONFIRMATION_IN_REQUEST });

  // request CONFIRMATION
  try {
    const { data: res } = await axios.get(
      `${process.env.BASE_URL}/confirmation?id=${value.id}&confirm=${value.confirm}`
    );
    console.log("res", res);

    // failure CONFIRMATION
    !res.success &&
      dispatch({
        type: CONFIRMATION_IN_FAILURE,
        payload: { success: false, error: res.message },
      });

    // success CONFIRMATION
    if (res.success) {
      dispatch({
        type: CONFIRMATION_IN_SUCCESS,
        payload: { success: true, message: res.message, error: "" },
      });
    }

    // failure CONFIRMATION
  } catch (error) {
    dispatch({
      type: CONFIRMATION_IN_FAILURE,
      payload: { success: false, error: error },
    });
  }
};
