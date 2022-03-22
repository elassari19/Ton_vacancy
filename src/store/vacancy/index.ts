import { Iinfo, Ivacancy } from "types";
import { PUBLISH_VACANCY } from "./constants";

export const initialState = {
  vacancy: '',
  category: '',
  description: '',
  salary: {
    delay: 'Per month',
    from: 1500,
    to: 5000
  },
  options: {
    'Full employment': false,
    'Underemployment': false,
    'Without experience': false,
    'Project work': false,
  }
}

type Iaction = {
  type: string;
  payload: Ivacancy;
}

const infoReducer = (state: Ivacancy = initialState, action: Iaction) => {
  switch (action.type) {
    case PUBLISH_VACANCY:
      return { ...action.payload };
  
    default:
      return state;
  }
}

export default infoReducer;