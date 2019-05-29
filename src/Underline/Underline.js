import React from 'react'
import { View, Animated } from 'react-native'

import { defaultProps, propTypes } from './props'
import * as styles from './styles'

const DURATION_DEFAULT = 0
const OPACITY_ACTIVE = 1
const OPACITY_DEFAULT = 0
const SCALE_ACTIVE = 1
const SCALE_DEFAULT = 0.01

export default class ReinputUnderline extends React.Component {
  static propTypes = propTypes
  static defaultProps = defaultProps

  state = {
    animatedOpacity: new Animated.Value(this.props.error ? OPACITY_ACTIVE : OPACITY_DEFAULT),
    animatedScaleX: new Animated.Value(this.props.error ? SCALE_ACTIVE : SCALE_DEFAULT)
  }

  componentDidUpdate (prevProps) {
    const { error, focused } = this.props

    if (prevProps.focused !== focused || prevProps.error !== error) {
      ;(focused || error) ? this.animateActive() : this.animateDefault()
    }
  }

  animateActive () {
    Animated.parallel([
      Animated.timing(this.state.animatedOpacity, {
        duration: DURATION_DEFAULT,
        toValue: OPACITY_ACTIVE,
        useNativeDriver: true
      }),
      Animated.timing(this.state.animatedScaleX, {
        duration: this.props.underlineDuration,
        toValue: SCALE_ACTIVE,
        useNativeDriver: true
      })
    ]).start()
  }

  animateDefault () {
    Animated.sequence([
      Animated.timing(this.state.animatedScaleX, {
        duration: this.props.underlineDuration,
        toValue: SCALE_DEFAULT,
        useNativeDriver: true
      }),
      Animated.timing(this.state.animatedOpacity, {
        duration: DURATION_DEFAULT,
        toValue: OPACITY_DEFAULT,
        useNativeDriver: true
      })
    ]).start()
  }

  render () {
    return (
      <View style={styles.container(this.props)}>
        <Animated.View style={styles.underline({...this.props, ...this.state})} />
      </View>
    )
  }
}
