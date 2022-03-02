export const SIGN_UP = 'SIGN_UP';

export const signUP = (employer: boolean) => ({
  type: SIGN_UP,
  payload: {employer}
})