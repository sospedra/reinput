import React from 'react'
import { Text } from 'react-native'

import { defaultProps, propTypes } from './props'
import * as styles from './styles'

export default class ReinputPlaceholder extends React.Component {
  static propTypes = propTypes
  static defaultProps = defaultProps

  render () {
    return this.props.placeholder && !this.props.hasValue && this.props.focused ? (
      <Text numberOfLines={1} pointerEvents="none" style={styles.placeholder(this.props)}>
        {this.props.placeholder}
      </Text>
    ) : null
  }
}
