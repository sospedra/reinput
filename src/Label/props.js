import PropTypes from 'prop-types'

import { GRAY, BLUE, DURATION } from '../services/constants'
import pick from '../services/pick'

export const propTypes = {
  activeColor: PropTypes.string,
  error: PropTypes.bool,
  errorColor: PropTypes.string,
  focused: PropTypes.bool,
  fontFamily: PropTypes.string,
  fontSize: PropTypes.number,
  fontWeight: PropTypes.string,
  hasValue: PropTypes.bool,
  label: PropTypes.string,
  labelActiveColor: PropTypes.string,
  labelActiveScale: PropTypes.number,
  labelActiveTop: PropTypes.number,
  labelColor: PropTypes.string,
  labelDuration: PropTypes.number,
  paddingBottom: PropTypes.number,
  paddingLeft: PropTypes.number,
  paddingRight: PropTypes.number,
  paddingTop: PropTypes.number
}

export const defaultProps = {
  labelActiveColor: BLUE,
  labelActiveScale: 0.8,
  labelActiveTop: -18,
  labelColor: GRAY,
  labelDuration: DURATION
}

export const pickLabelProps = (props) => {
  return pick(props, Object.keys(propTypes))
}
