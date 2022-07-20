<<<<<<< HEAD
export const SIGN_UP_REQUEST = "SIGN_UP_REQUEST";
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const SIGN_UP_FAILURE = "SIGN_UP_FAILURE";
=======
export const SIGN_UP = 'SIGN_UP';

export const signUP = (employer: boolean) => ({
  type: SIGN_UP,
  payload: {employer}
})
>>>>>>> f8a607d17099ca218811c66bc43c75a80cbe2df5
