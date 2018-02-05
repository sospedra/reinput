import React from 'react'
import { Text, Animated } from 'react-native'

export default class Label extends React.Component {
  static propTypes = propTypes
  static defaultProps = defaultProps

  constructor (props) {
    super(props)

    const { hasValue, focused, labelActiveScale, labelActiveTop } = props

    this.state = {
      animatedScale: new Animated.Value(hasValue || focused ? labelActiveScale : 1),
      animatedTranslate: new Animated.Value(hasValue || focused ? labelActiveTop : 0)
    }
  }

  componentWillReceiveProps = nextProps => {
    let { animatedScale, animatedTranslate } = this.state
    let { labelDuration, labelActiveScale, labelActiveTop, hasValue, focused } = nextProps

    if (this.props.hasValue !== hasValue || this.props.focused !== focused) {
      Animated.timing(animatedScale, {
        toValue: hasValue || focused ? labelActiveScale : 1,
        duration: labelDuration,
        useNativeDriver: true
      }).start()

      Animated.timing(animatedTranslate, {
        toValue: hasValue || focused ? labelActiveTop : 0,
        duration: labelDuration,
        useNativeDriver: true
      }).start()
    }
  }

  render () {
    const { animatedScale, animatedTranslate } = this.state
    const {
      focused,
      paddingTop,
      paddingRight,
      paddingLeft,
      activeColor,
      fontSize,
      fontFamily,
      fontWeight,
      label,
      labelColor,
      labelActiveColor,
      error,
      errorColor
    } = this.props

    return (
      <Animated.View
        style={{
          position: 'absolute',
          width: '200%',
          marginLeft: '-100%',
          top: paddingTop,
          transform: [{ translateY: animatedTranslate }, { scale: animatedScale }]
        }}
        numberOfLines={1}>
        <Text
          style={{
            left: '50%',
            top: 0,
            paddingRight,
            paddingLeft,
            color: error ? errorColor : focused ? activeColor || labelActiveColor : labelColor,
            fontFamily,
            fontSize,
            fontWeight
          }}>
          {label}
        </Text>
      </Animated.View>
    )
  }
}
