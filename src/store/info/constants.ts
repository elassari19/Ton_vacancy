import { Dispatch } from "redux";
import { Iinfo, infoAction } from "types";

export const InfoState = {
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

export const ADD_COMPANIES_INFO = 'ADD_COMPANIES_INFO';

export const setCompanyInfo = (info: Iinfo) => ({
  type: ADD_COMPANIES_INFO,
  payload: info
})