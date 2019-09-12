import PropTypes from 'prop-types'
import { TextInput } from 'react-native'

import { BASE_UNIT, BLACK, FONT, noop } from '../services/constants'
import pick from '../services/pick'
import * as ErrorProps from '../Error/props'
import * as IconProps from '../Icon/props'
import * as LabelProps from '../Label/props'
import * as PlaceholderProps from '../Placeholder/props'
import * as UnderlineProps from '../Underline/props'

export const propTypes = {
  // ...TextInput.propTypes, // Breaks IDE auto-completion
  ...ErrorProps.propTypes,
  ...IconProps.internalPropTypes,
  ...LabelProps.internalPropTypes,
  ...PlaceholderProps.internalPropTypes,
  ...UnderlineProps.internalPropTypes,
  accessibilityLabel: PropTypes.string,
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
  onBlur: PropTypes.func,
  onChangeText: PropTypes.func,
  onContentSizeChange: PropTypes.func,
  onFocus: PropTypes.func,
  onLayout: PropTypes.func,
  paddingBottom: PropTypes.number,
  paddingLeft: PropTypes.number,
  paddingRight: PropTypes.number,
  paddingTop: PropTypes.number,
  register: PropTypes.func.isRequired,
  style: PropTypes.node,
  textAlign: PropTypes.string
}

/** @type {import('../types').ReinputProps} */
export const defaultProps = {
  ...ErrorProps.defaultProps,
  accessible: true,
  style: {},
  color: BLACK,
  fontSize: FONT,
  fontWeight: 'normal',
  labelSpacingTop: BASE_UNIT * 2,
  marginBottom: BASE_UNIT,
  marginTop: 0,
  onBlur: noop,
  onChangeText: noop,
  onContentSizeChange: noop,
  onFocus: noop,
  paddingBottom: 0,
  paddingLeft: 0,
  paddingRight: 0,
  paddingTop: BASE_UNIT / 2,
  register: function () {},
  textAlign: 'left',
  value: undefined
}

export const pickTextInputProps = (props) => {
  return pick(props, Object.keys(TextInput.propTypes))
}
