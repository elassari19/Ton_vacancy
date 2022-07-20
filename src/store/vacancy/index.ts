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

<<<<<<< HEAD
const vacancyReducer = (state: Ivacancy = initialState, action: Iaction) => {
=======
const infoReducer = (state: Ivacancy = initialState, action: Iaction) => {
>>>>>>> f8a607d17099ca218811c66bc43c75a80cbe2df5
  switch (action.type) {
    case PUBLISH_VACANCY:
      return { ...action.payload };
  
    default:
      return state;
  }
}

<<<<<<< HEAD
export default vacancyReducer;
=======
export default infoReducer;
>>>>>>> f8a607d17099ca218811c66bc43c75a80cbe2df5
