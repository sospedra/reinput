import PropTypes from 'prop-types'

import { BASE_UNIT, RED, FONT_SMALL } from '../services/constants'
import pick from '../services/pick'

export const propTypes = {
  error: PropTypes.string,
  errorPaddingTop: PropTypes.number,
  errorColor: PropTypes.string,
  errorFontSize: PropTypes.number
}

/** @type {PropTypes.InferProps<typeof propTypes>} */
export const defaultProps = {
  errorPaddingTop: BASE_UNIT,
  errorColor: RED,
  errorFontSize: FONT_SMALL
}

export const pickErrorProps = (props) => {
  return pick(props, Object.keys(propTypes))
}
