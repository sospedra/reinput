import PropTypes from 'prop-types'

import { DURATION, GRAY } from '../services/constants'
import pick from '../services/pick'

export const internalPropTypes = {
  underlineActiveColor: PropTypes.string,
  underlineActiveHeight: PropTypes.number,
  underlineColor: PropTypes.string,
  underlineDuration: PropTypes.number,
  underlineHeight: PropTypes.number
}

export const propTypes = {
  ...internalPropTypes,
  activeColor: PropTypes.string,
  error: PropTypes.string,
  errorColor: PropTypes.string,
  focused: PropTypes.bool
}

/** @type {PropTypes.InferProps<typeof propTypes>} */
export const defaultProps = {
  underlineActiveHeight: 2,
  underlineColor: GRAY,
  underlineDuration: DURATION,
  underlineHeight: 1
}

export const pickUnderlineProps = (props) => {
  return pick(props, Object.keys(propTypes))
}
