import { BLUE } from '../services/constants'

export const container = (props = {}) => ({
  borderColor: props.underlineColor,
  borderTopWidth: props.underlineHeight
})

export const underline = (props = {}) => ({
  borderColor: (props.error && props.errorColor) || props.underlineActiveColor || props.activeColor || BLUE,
  borderTopWidth: props.underlineActiveHeight,
  marginTop: -props.underlineHeight,
  opacity: props.animatedOpacity,
  transform: [{ scaleX: props.animatedScaleX }]
})
