import { BASE_UNIT } from '../services/constants'

export const error = (props = {}) => ({
  color: props.errorColor,
  fontSize: props.errorFontSize,
  maxHeight: BASE_UNIT * 4
})

export const placeholder = () => ({
  maxHeight: BASE_UNIT * 4
})
