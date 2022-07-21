import { Iinfo } from "types";

export const ADD_COMPANIES_INFO = 'ADD_COMPANIES_INFO';

export const setCompanyInfo = (info: Iinfo) => ({
  type: ADD_COMPANIES_INFO,
  payload: info
})