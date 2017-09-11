import React from 'react'
import { View, Animated } from 'react-native'

import { propTypes } from './props'
import styles from './styles'

export class Underline extends React.Component {
  constructor (props: Object) {
    super(props)
    this.state = {
      lineLength: new Animated.Value(0)
    }
    this.wrapperWidth = 0
  }
  componentDidMount () {
    requestAnimationFrame(() => {
      this.element && this.elment.measure((left, top, width, height) => {
        this.wrapperWidth = width
      })
    })
  }
  expandLine () {
    Animated.timing(this.state.lineLength, {
      toValue: this.wrapperWidth,
      duration: this.props.duration
    }).start()
  }
  shrinkLine () {
    Animated.timing(this.state.lineLength, {
      toValue: 0,
      duration: this.props.duration
    }).start()
  }
  render () {
    let {
      borderColor,
      highlightColor
    } = this.props
    return (
      <View
        style={[styles.underlineWrapper, {
          backgroundColor: borderColor
        }]}
        ref={(ref) => { this.element = ref }}
      >
        <Animated.View
          style={[{
            width: this.state.lineLength,
            height: 1,
            backgroundColor: highlightColor
          }]}>
        </Animated.View>
      </View>
    )
  }
}

Underline.propTypes = propTypes
