import PropTypes from 'prop-types'

import { GRAY } from '../services/constants'
import pick from '../services/pick'

export const PlaceholderVisibility = {
  Always: undefined,
  Never: null,
  OnFocus: true,
  OnBlur: false
}

export const propTypes = {
  focused: PropTypes.bool,
  fontFamily: PropTypes.string,
  fontSize: PropTypes.number,
  fontWeight: PropTypes.string,
  hasValue: PropTypes.bool,
  paddingBottom: PropTypes.number,
  paddingLeft: PropTypes.number,
  paddingRight: PropTypes.number,
  paddingTop: PropTypes.number,
  placeholder: PropTypes.string,
  placeholderColor: PropTypes.string,
  placeholderOpacity: PropTypes.number,
  placeholderVisibility: PropTypes.oneOf(PlaceholderVisibility)
}

export const defaultProps = {
  placeholderColor: GRAY,
  placeholderOpacity: 1,
  placeholderVisibility: PlaceholderVisibility.Always
}

export const pickPlaceholderProps = (props) => {
  return pick(props, Object.keys(propTypes))
}
