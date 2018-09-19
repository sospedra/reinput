import React from 'react'
import Mayre from 'mayre'
import { TouchableOpacity } from 'react-native'

import { propTypes } from './props'
import * as styles from './styles'

export default class ReinputIcon extends React.Component {
  static propTypes = propTypes

  render () {
    return (
      <Mayre
        of={TouchableOpacity}
        when={!!this.props.icon}
        with={{
          accessible: false,
          activeOpacity: 1,
          children: this.props.icon,
          onPress: this.props.onPress,
          style: [styles.icon, this.props.overlay && styles.overlay(this.props.paddingBottom)]
        }}
      />
    )
  }
}
