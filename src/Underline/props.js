import PropTypes from 'prop-types'

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
  underlineActiveColor: '#3f51b5',
  underlineActiveHeight: 2,
  underlineColor: 'gray',
  underlineDuration: 200,
  underlineHeight: 1
}
