import pick from '../services/pick'

export const container = ({ top, translateY, scale }) => ({
  marginLeft: '-100%',
  position: 'absolute',
  top,
  transform: [
    { translateY },
    { scale }
  ],
  width: '200%'
})

export const label = (props = {}) => {
  const activeColor = props.activeColor || props.labelActiveColor
  const focusedColor = props.focused ? activeColor : props.labelColor
  const color = props.error ? props.errorColor : focusedColor

  return {
    ...pick(this.props, [
      'fontFamily',
      'fontSize',
      'fontWeight',
      'paddingLeft',
      'paddingRight'
    ]),
    color,
    left: '50%',
    top: 0
  }
}
