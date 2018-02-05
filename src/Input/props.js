import PropTypes from 'prop-types'
import { TextInput } from 'react-native'

import * as ErrorProps from '../Error/props'

export const defaultProps = {
  ...ErrorProps.defaultProps,
  color: 'black',
  fontSize: 15,
  fontWeight: 'normal',
  marginBottom: 8,
  onBlur: () => {},
  onChangeText: () => {},
  onContentSizeChange: () => {},
  onFocus: () => {},
  paddingBottom: 8,
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
