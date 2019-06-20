import PropTypes from 'prop-types'

import pick from '../services/pick'
import { BASE_UNIT } from '../services/constants'

export const ICON_SIZE = BASE_UNIT * 6

export const internalPropTypes = {
  iconHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  iconPaddingTop: PropTypes.number,
  iconWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export const propTypes = {
  ...internalPropTypes,
  icon: PropTypes.any, // Image-component handles type checking
  marginTop: PropTypes.number,
  onPress: PropTypes.func,
  overlay: PropTypes.bool
}

/** @type {PropTypes.InferProps<typeof propTypes>} */
export const defaultProps = {
  iconHeight: ICON_SIZE,
  iconPaddingTop: BASE_UNIT / 2,
  iconWidth: ICON_SIZE
}

export const pickIconProps = (props) => {
  return pick(props, Object.keys(propTypes))
}
export const pickIconInternalProps = (props) => {
  return pick(props, Object.keys(internalPropTypes))
}
