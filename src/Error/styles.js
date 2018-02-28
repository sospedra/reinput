export const error = (props = {}) => ({
  color: props.errorColor,
  fontSize: props.errorFontSize,
  height: BASE_UNIT * 3,
})

export const placeholder = () => ({
  height: BASE_UNIT * 3,
})
