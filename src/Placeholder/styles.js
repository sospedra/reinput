import pick from '../services/pick'

export const placeholder = (props = {}) => ({
  ...pick(props, [
    'fontFamily',
    'fontSize',
    'fontWeight',
    'paddingBottom',
    'paddingLeft',
    'paddingRight',
    'paddingTop'
  ]),
  backgroundColor: 'transparent',
  color: props.placeholderColor,
  opacity: (props.focused && !props.hasValue) ? 1 : 0,
  position: 'absolute',
  top: 2
})
