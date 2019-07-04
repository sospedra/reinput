import React from 'react'
import { TouchableOpacity, View, Image } from 'react-native'

import { propTypes, defaultProps } from './props'
import * as styles from './styles'

export function Container (props) {
  const { onPress } = props
  return onPress
    ? <TouchableOpacity activeOpacity={1} {...props}/>
    : <View pointerEvents="none" {...props} />
}

Container.propTypes = {
  onPress: propTypes.onPress
}

/** @augments {React.Component<typeof defaultProps, {}>} */
export default class ReinputIcon extends React.Component {
  static propTypes = propTypes
  static defaultProps = defaultProps

  render () {
    const { icon, onPress } = this.props
    if (!icon) {
      return null
    }
    return (
      <Container
        accessible={false}
        onPress={onPress}
        style={styles.icon(this.props)}
      >
        {
          React.isValidElement(icon)
            ? icon
            : <Image
              resizeMode='contain'
              source={icon}
              style={{
                flex: 1,
                aspectRatio: 1,
                maxHeight: this.props.overlay ? '85%' : this.props.iconHeight
              }}
            />
        }
      </Container>
    )
  }
}
