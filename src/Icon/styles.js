import { BASE_UNIT } from '../services/constants'

export const overlay = {
  alignItems: 'center',
  justifyContent: 'center',
  position: 'absolute',
  top: 0, bottom: 0, // Stretch vertically
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
