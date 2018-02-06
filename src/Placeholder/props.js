import PropTypes from 'prop-types'

import pick from '../services/pick'

export const propTypes = {
  focused: PropTypes.bool,
  fontFamily: PropTypes.string,
  fontSize: PropTypes.string,
  fontWeight: PropTypes.string,
  hasValue: PropTypes.number,
  paddingBottom: PropTypes.number,
  paddingLeft: PropTypes.number,
  paddingRight: PropTypes.number,
  paddingTop: PropTypes.number,
  placeholder: PropTypes.string,
  placeholderColor: PropTypes.string
}

export const defaultProps = {
  placeholderColor: 'gray'
}

export const pickPlaceholderProps = (props, value) => {
  return pick(props, Object.keys(propTypes))
}
