import PropTypes from 'prop-types'

import { BLUE, DURATION, GRAY } from '../services/constants'
import pick from '../services/pick'

export const propTypes = {
  activeColor: PropTypes.string,
  error: PropTypes.bool,
  errorColor: PropTypes.string,
  focused: PropTypes.bool,
  underlineActiveColor: PropTypes.string,
  underlineActiveHeight: PropTypes.number,
  underlineColor: PropTypes.string,
  underlineDuration: PropTypes.number,
  underlineHeight: PropTypes.number
}

export const defaultProps = {
  underlineActiveColor: BLUE,
  underlineActiveHeight: 2,
  underlineColor: GRAY,
  underlineDuration: DURATION,
  underlineHeight: 1
}

export const pickUnderlineProps = (props) => {
  return pick(props, Object.keys(propTypes))
}
