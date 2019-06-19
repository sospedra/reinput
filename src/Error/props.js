import PropTypes from 'prop-types'

import { RED } from '../services/constants'
import pick from '../services/pick'

export const propTypes = {
  error: PropTypes.string,
  errorColor: PropTypes.string,
  errorMaxLines: PropTypes.number,
  errorStyle: PropTypes.object
}

/** @type {PropTypes.InferProps<typeof propTypes>} */
export const defaultProps = {
  errorColor: RED,
  errorMaxLines: 2
}

export const pickErrorProps = (props) => {
  return pick(props, Object.keys(propTypes))
}
