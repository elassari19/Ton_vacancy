import { Iinfo, infoAction } from "types";
import { ADD_COMPANIES_INFO, InfoState } from "./constants";


const infoReducer = (state: Iinfo = InfoState, action: infoAction) => {
  switch (action.type) {
    case ADD_COMPANIES_INFO:
      return { ...action.payload };
  
    default:
      return state;
  }
}

export default infoReducer;