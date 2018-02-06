import PropTypes from 'prop-types'
import { TextInput } from 'react-native'

import { BASE_UNIT, FONT } from '../services/constants'
import pick from '../services/pick'
import * as ErrorProps from '../Error/props'

const noop = () => {}

export const defaultProps = {
  ...ErrorProps.defaultProps,
  color: 'black',
  fontSize: FONT,
  fontWeight: 'normal',
  marginBottom: BASE_UNIT,
  onBlur: noop,
  onChangeText: noop,
  onContentSizeChange: noop,
  onFocus: noop,
  paddingBottom: BASE_UNIT,
  paddingLeft: 0,
  paddingRight: 0,
  paddingTop: 20,
  value: null
}

export const propTypes = {
  ...TextInput.PropTypes,
  ...ErrorProps.PropTypes,
  activeColor: PropTypes.string,
  color: PropTypes.string,
  fontFamily: PropTypes.string,
  fontSize: PropTypes.number,
  fontWeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.number,
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
  paddingBottom: PropTypes.number,
  paddingLeft: PropTypes.number,
  paddingRight: PropTypes.number,
  paddingTop: PropTypes.number
}

export const pickTextInputProps = (props) => {
  return pick(props, Object.keys(TextInput.PropTypes))
}
