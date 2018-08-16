import PropTypes from 'prop-types'

import pick from '../services/pick'

export const propTypes = {
  icon: PropTypes.element,
  overlay: PropTypes.bool,
  paddingBottom: PropTypes.number.isRequired
}

export const pickIconProps = (props) => {
  return pick(props, Object.keys(propTypes))
}
