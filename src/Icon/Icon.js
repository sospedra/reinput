import React from 'react'
import { TouchableOpacity } from 'react-native'

import { propTypes } from './props'
import * as styles from './styles'

export default class ReinputIcon extends React.Component {
  static propTypes = propTypes

  render () {
    const {icon, onPress, overlay, paddingBottom, children} = this.props
    if (!icon) {
      return null
    }

    return (
      <TouchableOpacity
        accessible={false}
        activeOpacity={1}
        onPress={onPress}
        style={[styles.icon, overlay && styles.overlay(paddingBottom)]}
      >
        {children}
      </TouchableOpacity>
    )
  }
}
