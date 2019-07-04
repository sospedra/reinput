import PropTypes from 'prop-types'
import { TouchableOpacity } from 'react-native'

import { BASE_UNIT, BLACK, FONT, noop } from '../services/constants'
import pick from '../services/pick'
import * as ErrorProps from '../Error/props'
import * as IconProps from '../Icon/props'
import * as LabelProps from '../Label/props'
import * as UnderlineProps from '../Underline/props'

export const propTypes = {
  // ...TouchableOpacity.propTypes, // Breaks IDE auto-completion
  ...ErrorProps.propTypes,
  ...IconProps.internalPropTypes,
  ...LabelProps.internalPropTypes,
  ...UnderlineProps.internalPropTypes,
  activeColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  fontFamily: PropTypes.string,
  fontSize: PropTypes.number,
  fontWeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.number,
  icon: PropTypes.any,
  iconOverlay: PropTypes.any,
  labelSpacingTop: PropTypes.number,
  marginBottom: PropTypes.number,
  marginLeft: PropTypes.number,
  marginRight: PropTypes.number,
  marginTop: PropTypes.number,
  maxHeight: PropTypes.number,
  minHeight: PropTypes.number,
  onPress: PropTypes.func,
  onLayout: PropTypes.func,
  paddingBottom: PropTypes.number,
  paddingLeft: PropTypes.number,
  paddingRight: PropTypes.number,
  paddingTop: PropTypes.number,
  register: PropTypes.func.isRequired,
  value: PropTypes.string
}

/** @type {import('../types').ReinputButtonProps} */
export const defaultProps = {
  ...ErrorProps.defaultProps,
  accessible: true,
  color: BLACK,
  fontSize: FONT,
  fontWeight: 'normal',
  labelSpacingTop: BASE_UNIT * 2,
  marginBottom: BASE_UNIT,
  marginTop: 0,
  onPress: noop,
  paddingBottom: 0,
  paddingLeft: 0,
  paddingRight: 0,
  paddingTop: BASE_UNIT / 2,
  register: function () {},
  value: null
}

export const pickTouchableOpacityProps = (props) => {
  return pick(props, Object.keys(TouchableOpacity.propTypes))
}
