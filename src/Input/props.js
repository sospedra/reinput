import PropTypes from 'prop-types'

export const defaultProps = {
  autoGrow: false,
  borderColor: '#E0E0E0',
  borderless: false,
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
  autoGrow: PropTypes.bool.isRequired,
  borderColor: PropTypes.string.isRequired,
  borderless: PropTypes.bool.isRequired,
  dense: PropTypes.bool.isRequired,
  duration: PropTypes.number.isRequired,
  height: PropTypes.number,
  highlightColor: PropTypes.string,
  icon: PropTypes.element,
  inputStyle: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.number,
    PropTypes.object
  ]),
  label: PropTypes.string,
  labelColor: PropTypes.string.isRequired,
  labelStyle: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.number,
    PropTypes.object
  ]),
  multiline: PropTypes.bool.isRequired,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onChangeText: PropTypes.func,
  onContentSizeChange: PropTypes.func,
  onFocus: PropTypes.func,
  textBlurColor: PropTypes.string,
  textColor: PropTypes.string.isRequired,
  textFocusColor: PropTypes.string,
  value: PropTypes.string.isRequired,
  style: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.number,
    PropTypes.object
  ])
}
