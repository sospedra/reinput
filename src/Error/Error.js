import React from 'react'
import Mayre from 'mayre'
import { Text } from 'react-native'

import { defaultProps, propTypes } from './props'
import * as styles from './styles'

export default class ReinputError extends React.Component {
  static propTypes = propTypes
  static defaultProps = defaultProps

  render () {
    return (
      <Mayre
        of={Text}
        when={!!this.props.error}
        with={{
          children: this.props.error,
          style: styles.error(this.props)
        }}
      />
    )
  }
}
