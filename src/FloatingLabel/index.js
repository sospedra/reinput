import React from 'react'
import { Animated } from 'react-native'

import { propTypes } from './props'
import styles from './styles'

export default class FloatingLabel extends React.Component {
  static propTypes = propTypes

  constructor (props: Object) {
    super(props)

    if (props.dense) {
      this.posTop = -17
      this.posBottom = 3
      this.fontLarge = 13
      this.fontSmall = 13
    } else {
      this.posTop = -13
      this.posBottom = 8
      this.fontLarge = 16
      this.fontSmall = 12
    }

    const posTop = (props.hasValue) ? this.posTop : this.posBottom
    const fontSize = (props.hasValue) ? this.fontSmall : this.fontLarge

    this.state = {
      top: new Animated.Value(posTop),
      fontSize: new Animated.Value(fontSize)
    }
  }

  shouldComponentUpdate (nextProps: Object, nextState: Object) : bool {
    return this.props.hasValue === nextProps.hasValue
  }

  floatLabel () {
    Animated.parallel([
      Animated.timing(this.state.top, {
        duration: this.props.duration,
        toValue: this.posTop
      }),
      Animated.timing(this.state.fontSize, {
        duration: this.props.duration,
        toValue: this.fontSmall
      })
    ]).start()
  }

  sinkLabel () {
    Animated.parallel([
      Animated.timing(this.state.top, {
        duration: this.props.duration,
        toValue: this.posBottom
      }),
      Animated.timing(this.state.fontSize, {
        duration: this.props.duration,
        toValue: this.fontLarge
      })
    ]).start()
  }

  render () {
    const textStyle = {
      fontSize: this.state.fontSize,
      top: this.state.top,
      color: this.props.labelColor
    }

    return (
      <Animated.Text
        onPress={() => { this.props.focusHandler() }}
        style={[
          textStyle,
          styles.labelText,
          this.props.isFocused && { color: this.props.highlightColor },
          this.props.style
        ]}
      >
        {this.props.label}
      </Animated.Text>
    )
  }
}
