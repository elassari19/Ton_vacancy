import { PRIVACY_ON, TERMS_ON, TERMS_PRIVACY_OFF } from "./constant";

interface IStatae{
  privacy: string,
  terms: string,
}

type Iaction = {
  type: string;
  payload: string
}

const initialState = {
  privacy: 'off',
  terms: 'off',
}

const privacyReducer = (state: IStatae = initialState, action: Iaction) => {
  switch (action.type) {
    case PRIVACY_ON:
      return {
        ...state,
        privacy: 'on',
        terms: 'off'
      };
      case TERMS_ON:
        return {
          ...state,
          privacy: 'off',
          terms: 'on'
        };
        case TERMS_PRIVACY_OFF:
          return {
            ...state,
            privacy: 'off',
            terms: 'off'
          };  
  
    default:
      return state;
  }
}

export default privacyReducer;