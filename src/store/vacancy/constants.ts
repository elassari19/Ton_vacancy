import { Ivacancy } from "types";

export const PUBLISH_VACANCY = 'PUBLISH_VACANCY';

export const setPublishVacancy = (vacancy: Ivacancy) => ({
  type: PUBLISH_VACANCY,
  payload: vacancy
})