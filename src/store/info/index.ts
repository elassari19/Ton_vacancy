import { Iinfo } from "types";
import { ADD_COMPANIES_INFO } from "./constants";

export const initialState = {
  name: '',
  category: '',
  description: '',
  phone: '',
  email: '',
  telegram: '',
  city: Intl.DateTimeFormat().resolvedOptions().timeZone,
  benfits: {
    events: false,
    insurance: false,
    bonus: false,
    review: false,
    discount: false,
    schedule: false,
  }
}

type Iaction = {
  type: string;
  payload: Iinfo;
}

const infoReducer = (state: Iinfo = initialState, action: Iaction) => {
  switch (action.type) {
    case ADD_COMPANIES_INFO:
      return { ...action.payload };
  
    default:
      return state;
  }
}

export default infoReducer;