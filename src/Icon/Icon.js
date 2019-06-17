import React from 'react'
import { TouchableOpacity, Image } from 'react-native'

import { propTypes, defaultProps } from './props'
import * as styles from './styles'

/** @augments {React.Component<typeof defaultProps, {}>} */
export default class ReinputIcon extends React.Component {
  static propTypes = propTypes
  static defaultProps = defaultProps

  render () {
    const { icon, onPress } = this.props
    if (!icon) {
      return null
    }

    return (
      <TouchableOpacity
        accessible={false}
        activeOpacity={1}
        onPress={onPress}
        style={styles.icon(this.props)}
      >
        {React.isValidElement(icon) ? icon : <Image source={icon} />}
      </TouchableOpacity>
    )
  }
}
