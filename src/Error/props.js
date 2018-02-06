import PropTypes from 'prop-types'

import pick from '../services/pick'

export const propTypes = {
  error: PropTypes.string,
  errorPaddingTop: PropTypes.number,
  errorColor: PropTypes.string,
  errorFontSize: PropTypes.number
}

export const defaultProps = {
  errorPaddingTop: 8,
  errorColor: '#fc1f4a',
  errorFontSize: 12
}

export const pickErrorProps = (props) => {
  return pick(props, Object.keys(propTypes))
}
