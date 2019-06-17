import PropTypes from 'prop-types'

import { GRAY, DURATION } from '../services/constants'
import pick from '../services/pick'

export const internalPropTypes = {
  label: PropTypes.string,
  labelActiveColor: PropTypes.string,
  labelActiveScale: PropTypes.number,
  labelActiveTop: PropTypes.number,
  labelColor: PropTypes.string,
  labelDuration: PropTypes.number
}

export const propTypes = {
  ...internalPropTypes,
  activeColor: PropTypes.string,
  error: PropTypes.string,
  errorColor: PropTypes.string,
  focused: PropTypes.bool,
  fontFamily: PropTypes.string,
  fontSize: PropTypes.number,
  fontWeight: PropTypes.string,
  hasValue: PropTypes.bool,
  paddingBottom: PropTypes.number,
  paddingLeft: PropTypes.number,
  paddingRight: PropTypes.number,
  paddingTop: PropTypes.number
}

/** @type {PropTypes.InferProps<typeof propTypes>} */
export const defaultProps = {
  labelActiveScale: 0.8,
  labelActiveTop: -22,
  labelColor: GRAY,
  labelDuration: DURATION
}

export const pickLabelProps = (props) => {
  return pick(props, Object.keys(propTypes))
}
