import React from 'react'
import { Text, View } from 'react-native'

import { defaultProps, propTypes } from './props'
import * as styles from './styles'

/**
 * @typedef {typeof defaultProps} Props
 * @augments {React.Component<Props, {}>}
 */
export default class ReinputError extends React.Component {
  static propTypes = propTypes
  static defaultProps = defaultProps

  render () {
    return this.props.error ? (
      <Text
        numberOfLines={this.props.errorMaxLines}
        style={styles.error(this.props)}
      >
        {this.props.error}
      </Text>
    ) : (
      <View styles={styles.placeholder()} />
    )
  }
}
