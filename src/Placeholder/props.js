import PropTypes from 'prop-types'

import { GRAY } from '../services/constants'
import pick from '../services/pick'

export const PlaceholderVisibility = {
  Always: 1,
  Never: null,
  OnFocus: true,
  OnBlur: false
}

export const internalPropTypes = {
  placeholder: PropTypes.string,
  placeholderColor: PropTypes.string,
  placeholderOpacity: PropTypes.number,
  placeholderVisibility: PropTypes.oneOfType([PropTypes.number, PropTypes.bool])
}

export const propTypes = {
  ...internalPropTypes,
  focused: PropTypes.bool,
  fontFamily: PropTypes.string,
  fontSize: PropTypes.number,
  fontWeight: PropTypes.string,
  hasValue: PropTypes.bool,
  paddingBottom: PropTypes.number,
  paddingLeft: PropTypes.number,
  paddingRight: PropTypes.number,
  paddingTop: PropTypes.number
}

/** @type {PropTypes.InferProps<typeof propTypes>} */
export const defaultProps = {
  placeholderColor: GRAY,
  placeholderOpacity: 1,
  placeholderVisibility: PlaceholderVisibility.OnFocus
}

export const pickPlaceholderProps = (props) => {
  return pick(props, Object.keys(propTypes))
}
