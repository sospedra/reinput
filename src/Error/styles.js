import { BASE_UNIT } from '../services/constants'

export const error = (props = {}) => ({
  backgroundColor: props.errorBackgroundColor,
  color: props.errorColor,
  fontSize: props.errorFontSize,
  marginLeft: props.errorMarginLeft,
  marginRight: props.errorMarginRight,
  paddingBottom: props.errorPaddingBottom,
  paddingLeft: props.errorPaddingLeft,
  paddingRight: props.errorPaddingRight,
  paddingTop: props.errorPaddingTop
})

export const placeholder = () => ({
  height: BASE_UNIT * 4
})
