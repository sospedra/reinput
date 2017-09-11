import React from 'react'
import { Animated } from 'react-native'

import { propTypes } from './props'
import styles from './styles'

export class FloatingLabel extends React.Component {
  constructor (props: Object) {
    super(props)
    if (props.dense) {
      this.posTop = 12
      this.posBottom = 32
      this.fontLarge = 13
      this.fontSmall = 13
    } else {
      this.posTop = 16
      this.posBottom = 37
      this.fontLarge = 16
      this.fontSmall = 12
    }
    let posTop = (props.hasValue) ? this.posTop : this.posBottom
    let fontSize = (props.hasValue) ? this.fontSmall : this.fontLarge
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
        toValue: this.posTop,
        duration: this.props.duration
      }),
      Animated.timing(this.state.fontSize, {
        toValue: this.fontSmall,
        duration: this.props.duration
      })
    ]).start()
  }
  sinkLabel () {
    Animated.parallel([
      Animated.timing(this.state.top, {
        toValue: this.posBottom,
        duration: this.props.duration
      }),
      Animated.timing(this.state.fontSize, {
        toValue: this.fontLarge,
        duration: this.props.duration
      })
    ]).start()
  }
  render () : Object {
    let {
      label,
      labelColor,
      highlightColor,
      style
    } = this.props
    return (
      <Animated.Text
        style={[{
          fontSize: this.state.fontSize,
          top: this.state.top,
          color: labelColor
        }, styles.labelText, this.props.isFocused && {
          color: highlightColor
        }, style]}
        onPress={() => {
          this.props.focusHandler()
        }}
      >
        {label}
      </Animated.Text>
    )
  }
}

FloatingLabel.propTypes = propTypes

export default FloatingLabel
