import React from 'react'
import { Text } from 'react-native'

import { defaultProps, propTypes, PlaceholderVisibility } from './props'
import * as styles from './styles'

/** @augments {React.Component<typeof defaultProps, {}>} */
export default class ReinputPlaceholder extends React.Component {
  static propTypes = propTypes
  static defaultProps = defaultProps

  render () {
    if (this.props.placeholder && !this.props.hasValue &&
        (this.props.placeholderVisibility === PlaceholderVisibility.Always ||
          (this.props.placeholderVisibility === this.props.focused)
        )) {
      return (
        <Text numberOfLines={1} pointerEvents="none"
          style={styles.placeholder(this.props)}>
          {this.props.placeholder}
        </Text>
      )
    }
    return null
  }
}
