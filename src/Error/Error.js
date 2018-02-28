import React from 'react'
import Mayre from 'mayre'
import { Text, View } from 'react-native'

import { defaultProps, propTypes } from './props'
import * as styles from './styles'

export default class ReinputError extends React.Component {
  static propTypes = propTypes
  static defaultProps = defaultProps

  render () {
    return (
      <Mayre
        when={!!this.props.error}
        of={Text}
        with={{
          children: this.props.error,
          style: styles.error(this.props)
        }}
        or={View}
        orWith={{
          style: styles.placeholder()
        }}
      />
    )
  }
}
