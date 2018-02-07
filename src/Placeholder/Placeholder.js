import React from 'react'
import Mayre from 'mayre'
import { Text } from 'react-native'

import { defaultProps, propTypes } from './props'
import * as styles from './styles'

export default class ReinputPlaceholder extends React.Component {
  static propTypes = propTypes
  static defaultProps = defaultProps

  render () {
    return <Mayre
      of={Text}
      when={!!this.props.placeholder}
      with={{
        children: this.props.placeholder,
        numberOfLines: 1,
        pointerEvents: 'none',
        style: styles.placeholder(this.props)
      }}
    />
  }
}
