import { BASE_UNIT } from '../services/constants'

export const overlay = {
  alignItems: 'flex-end',
  justifyContent: 'center',
  position: 'absolute',
  // Stretch vertically
  bottom: 0,
  top: 0,

  right: BASE_UNIT
}

/** @param { import('./props').propTypes } props */
export const icon = (props = {}) => {
  if (props.overlay) {
    return overlay
  }
  return {
    alignItems: 'center',
    alignSelf: 'flex-start',
    justifyContent: 'flex-start',
    height: props.iconHeight,
    marginTop: props.marginTop,
    paddingTop: props.iconPaddingTop,
    width: props.iconWidth
  }
}
