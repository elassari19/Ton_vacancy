import axios from "axios";
import { Dispatch } from "redux";
import { ISignup } from "types";
import { SIGN_UP_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS } from "./constants";

export const signUp = (value: ISignup) => async (dispatch: Dispatch) => {
  // bein user signin
  dispatch({ type: SIGN_UP_REQUEST, payload: { isLoading: true } });

  // request signup
  let res;
  try {
    res = await axios.post(`${process.env.BASE_URL}/signup`, value);

    console.log(res);

    // success signup
    if (res.data.status) {
      dispatch({ type: SIGN_UP_SUCCESS, payload: res });
    }

    // success failure
    if (!res.data.status) {
      dispatch({ type: SIGN_UP_FAILURE, payload: res.data });
    }

    // failure signup
  } catch (error) {
    dispatch({ type: SIGN_UP_FAILURE, payload: error });
  }
};
