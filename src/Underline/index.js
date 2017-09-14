import React from 'react'
import { View, Animated } from 'react-native'

import { propTypes } from './props'
import styles from './styles'

export default class Underline extends React.Component {
  static propTypes = propTypes

  wrapperWidth = 0
  state = { lineLength: new Animated.Value(0) }
  measure = (e) => { this.wrapperWidth = e.nativeEvent.layout.width }

  expandLine () {
    Animated.timing(this.state.lineLength, {
      duration: this.props.duration,
      toValue: this.wrapperWidth
    }).start()
  }

  shrinkLine () {
    Animated.timing(this.state.lineLength, {
      duration: this.props.duration,
      toValue: 0
    }).start()
  }

  render () {
    return (
      <View
        onLayout={this.measure}
        style={[
          styles.underlineWrapper,
          { borderColor: this.props.borderColor },
          !this.props.editable && styles.disabled
        ]}
      >
        <Animated.View
          style={{
            backgroundColor: this.props.highlightColor,
            height: 1,
            width: this.state.lineLength
          }}>
        </Animated.View>
      </View>
    )
  }
}
