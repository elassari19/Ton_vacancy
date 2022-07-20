export const PRIVACY_ON = 'PRIVACY_ON'
export const TERMS_ON = 'TERMS_ON'
export const TERMS_PRIVACY_OFF = 'TERMS_PRIVACY_OFF'

export const privacyOn = () => ({
  type: PRIVACY_ON,
  payload: 'on'
})

export const termsOn = () => ({
  type: TERMS_ON,
  payload: 'on'
})

export const termsPrivacyOf = () => ({
  type: TERMS_PRIVACY_OFF,
  payload: 'off'
})