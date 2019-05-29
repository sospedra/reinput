import PropTypes from 'prop-types'
import { TouchableOpacity } from 'react-native'

import { BASE_UNIT, BLACK, FONT } from '../services/constants'
import pick from '../services/pick'
import * as ErrorProps from '../Error/props'

const noop = () => {}

export const propTypes = {
  ...TouchableOpacity.propTypes,
  ...ErrorProps.propTypes,
  activeColor: PropTypes.string,
  color: PropTypes.string,
  fontFamily: PropTypes.string,
  fontSize: PropTypes.number,
  fontWeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.number,
  icon: PropTypes.node,
  iconOverlay: PropTypes.node,
  marginBottom: PropTypes.number,
  marginLeft: PropTypes.number,
  marginRight: PropTypes.number,
  marginTop: PropTypes.number,
  maxHeight: PropTypes.number,
  minHeight: PropTypes.number,
  onPress: PropTypes.func,
  paddingBottom: PropTypes.number,
  paddingLeft: PropTypes.number,
  paddingRight: PropTypes.number,
  paddingTop: PropTypes.number,
  register: PropTypes.func.isRequired
}

/** @type {PropTypes.InferProps<typeof propTypes>} */
export const defaultProps = {
  ...ErrorProps.defaultProps,
  accessible: true,
  color: BLACK,
  fontSize: FONT,
  fontWeight: 'normal',
  marginBottom: BASE_UNIT,
  onPress: noop,
  paddingBottom: BASE_UNIT,
  paddingLeft: 0,
  paddingRight: 0,
  paddingTop: BASE_UNIT * 3,
  register: function () {},
  value: null
}

export const pickTouchableOpacityProps = (props) => {
  return pick(props, Object.keys(TouchableOpacity.propTypes))
}
