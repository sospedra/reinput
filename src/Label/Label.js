import React from 'react'
import { Text, Animated } from 'react-native'

import { defaultProps, propTypes } from './props'
import * as styles from './styles'

export default class ReinputLabel extends React.Component {
  static propTypes = propTypes
  static defaultProps = defaultProps

  constructor (props) {
    super(props)

    const isFocused = props.hasValue || props.focused

    this.state = {
      animatedScale: new Animated.Value(isFocused ? props.labelActiveScale : 1),
      animatedTranslate: new Animated.Value(isFocused ? props.labelActiveTop : 0)
    }
  }

  componentWillReceiveProps (props) {
    const { animatedScale, animatedTranslate } = this.state
    const { labelDuration, labelActiveScale, labelActiveTop, hasValue, focused } = props
    const hasValueChanged = this.props.hasValue !== hasValue
    const focusedChanged = this.props.focused !== focused
    const isFocused = hasValue || focused

    if (hasValueChanged || focusedChanged) {
      Animated.timing(animatedScale, {
        duration: labelDuration,
        toValue: isFocused ? labelActiveScale : 1,
        useNativeDriver: true
      }).start()

      Animated.timing(animatedTranslate, {
        duration: labelDuration,
        toValue: isFocused ? labelActiveTop : 0,
        useNativeDriver: true
      }).start()
    }
  }

  render () {
    return (
      <Animated.View
        numberOfLines={1}
        style={styles.container({
          scale: this.state.animatedScale,
          top: this.props.paddingTop,
          translateY: this.state.animatedTranslate
        })}
      >
        <Text style={styles.label(this.props)}>
          {this.props.label}
        </Text>
      </Animated.View>
    )
  }
}
