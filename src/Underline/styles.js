export const container = (props = {}) => ({
  borderColor: props.underlineColor,
  borderTopWidth: props.underlineHeight
})

export const underline = (props = {}) => ({
  borderColor: (props.error && props.errorColor) || props.activeColor || props.underlineActiveColor,
  borderTopWidth: props.underlineActiveHeight,
  marginTop: -props.underlineHeight,
  opacity: props.animatedOpacity,
  transform: [{ scaleX: props.animatedScaleX }]
})
