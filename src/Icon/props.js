import PropTypes from 'prop-types'

import pick from '../services/pick'

export const propTypes = {
  icon: PropTypes.element
}

export const pickIconProps = (props) => {
  return pick(props, Object.keys(propTypes))
}
