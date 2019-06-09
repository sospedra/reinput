import PropTypes from 'prop-types'

import { BASE_UNIT, RED, FONT_SMALL } from '../services/constants'
import pick from '../services/pick'

export const propTypes = {
  error: PropTypes.string,
  errorBackgroundColor: PropTypes.string,
  errorColor: PropTypes.string,
  errorFontSize: PropTypes.number,
  errorMarginLeft: PropTypes.number,
  errorMarginRight: PropTypes.number,
  errorMaxLines: PropTypes.number,
  errorPaddingBottom: PropTypes.number,
  errorPaddingLeft: PropTypes.number,
  errorPaddingRight: PropTypes.number,
  errorPaddingTop: PropTypes.number
}

/** @type {PropTypes.InferProps<typeof propTypes>} */
export const defaultProps = {
  errorColor: RED,
  errorFontSize: FONT_SMALL,
  errorMaxLines: 2,
  errorPaddingBottom: BASE_UNIT / 2,
  errorPaddingTop: BASE_UNIT / 2
}

export const pickErrorProps = (props) => {
  return pick(props, Object.keys(propTypes))
}
