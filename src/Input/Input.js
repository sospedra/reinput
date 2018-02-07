import React from 'react'
import { View, TextInput } from 'react-native'

import Error, { pickErrorProps } from '../Error'
import Icon, { pickIconProps } from '../Icon'
import Label, { pickLabelProps } from '../Label'
import Placeholder, { pickPlaceholderProps } from '../Placeholder'
import Underline, { pickUnderlineProps } from '../Underline'
import { defaultProps, propTypes, pickTextInputProps } from './props'
import * as styles from './styles'

export default class ReinputInput extends React.Component {
  static propTypes = propTypes
  static defaultProps = defaultProps

  constructor (props) {
    super(props)

    this.state = {
      focused: false,
      height: props.fontSize * styles.SCALE_FACTOR,
      value: null
    }
  }

  handleFocus = (...args) => {
    const { onFocus } = this.props
    this.setState({ focused: true })
    onFocus(...args)
  }

  handleBlur = (...args) => {
    const { onBlur } = this.props
    this.setState({ focused: false })
    onBlur(...args)
  }

  handleChangeText = (...args) => {
    const { onChangeText, value } = this.props

    if (value == null) {
      this.setState({ value: args[0] })
    }

    onChangeText(...args)
  }

  handleContentSizeChange = (event) => {
    const { onContentSizeChange, fontSize } = this.props
    const { height } = event.nativeEvent.contentSize

    this.setState({
      height: Math.max(fontSize * styles.SCALE_FACTOR, Math.ceil(height))
    })

    onContentSizeChange(event)
  }

  hasValidValue (value) {
    return !!(value && value.length > 0)
  }

  render () {
    const { focused } = this.state
    const value = this.props.value != null ? this.props.value : this.state.value
    const hasValue = this.hasValidValue(value) || this.hasValidValue(this.props.defaultValue)

    return (
      <View style={styles.row}>
        <Icon {...pickIconProps(this.props)} />
        <View style={styles.container(this.props)}>
          <Label {...pickLabelProps({...this.props, hasValue, focused})} />
          <Placeholder {...pickPlaceholderProps({...this.props, hasValue, focused})} />
          <TextInput
            {...pickTextInputProps(this.props)}
            onBlur={this.handleBlur}
            onChangeText={this.handleChangeText}
            onContentSizeChange={this.handleContentSizeChange}
            onFocus={this.handleFocus}
            style={styles.input(this.props, this.state.height)}
            underlineColorAndroid='transparent'
            value={value}
          />
          <Underline {...pickUnderlineProps({...this.props, focused})} />
          <Error {...pickErrorProps(this.props)} />
        </View>
      </View>
    )
  }
}
