import React from 'react'
import Mayre from 'mayre'
import { View } from 'react-native'

import { propTypes } from './props'
import * as styles from './styles'

export default class ReinputIcon extends React.Component {
  static propTypes = propTypes

  render () {
    return (
      <Mayre
        of={View}
        when={!!this.props.icon}
        with={{
          children: this.props.icon,
          style: styles.icon
        }}
      />
    )
  }
}
