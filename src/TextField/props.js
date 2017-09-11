import PropTypes from 'prop-types'

export const defaultProps = {
  autoGrow: false,
  borderColor: '#E0E0E0',
  dense: false,
  duration: 200,
  height: undefined,
  labelColor: '#9E9E9E',
  multiline: false,
  textColor: '#000',
  underlineColorAndroid: 'rgba(0,0,0,0)',
  value: ''
}

export const propTypes = {
  autoGrow: PropTypes.bool,
  borderColor: PropTypes.string,
  dense: PropTypes.bool,
  duration: PropTypes.number,
  height: PropTypes.oneOfType([PropTypes.oneOf(undefined), PropTypes.number]),
  highlightColor: PropTypes.string,
  inputStyle: PropTypes.object,
  label: PropTypes.string,
  labelColor: PropTypes.string,
  labelStyle: PropTypes.object,
  multiline: PropTypes.bool,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onChangeText: PropTypes.func,
  onFocus: PropTypes.func,
  textBlurColor: PropTypes.string,
  textColor: PropTypes.string,
  textFocusColor: PropTypes.string,
  value: PropTypes.string,
  wrapperStyle: PropTypes.object
}
