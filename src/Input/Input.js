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
      value: props.defaultValue
    }
  }

  handleFocus = (...args) => {
    this.setState({ focused: true })
    this.props.onFocus(...args)
  }

  handleBlur = (...args) => {
    this.setState({ focused: false })
    this.props.onBlur(...args)
  }

  handleChangeText = (value, ...args) => {
    if (!this.hasPropValue()) {
      this.setState({ value })
    }
    this.props.onChangeText(value, ...args)
  }

  handleContentSizeChange = (event) => {
    const { onContentSizeChange, fontSize } = this.props
    const { height } = event.nativeEvent.contentSize

    this.setState({
      height: Math.max(fontSize * styles.SCALE_FACTOR, Math.ceil(height))
    })

    onContentSizeChange(event)
  }

  hasPropValue = () => this.props.value !== undefined

  hasValueWithContent = (value) => {
    return typeof value === 'string' && value.length > 0
  }

  render () {
    const { focused } = this.state
    const value = this.hasPropValue() ? this.props.value : this.state.value
    const hasValue = this.hasValueWithContent(value)

    return (
      <View style={styles.row}>
        <Icon {...pickIconProps(this.props)} />
        <View style={styles.container(this.props)}>
          <View
            accessible={this.props.accessible}
            accessiblityLabel={this.props.accessiblityLabel || this.props.label}
          >
            <Label {...pickLabelProps({...this.props, hasValue, focused})} />
            <Placeholder {...pickPlaceholderProps({...this.props, hasValue, focused})} />
            <TextInput
              {...pickTextInputProps(this.props)}
              onBlur={this.handleBlur}
              onChangeText={this.handleChangeText}
              onContentSizeChange={this.handleContentSizeChange}
              onFocus={this.handleFocus}
              placeholder={undefined}
              ref={this.props.register}
              style={styles.input(this.props, this.state.height)}
              underlineColorAndroid='transparent'
              value={value}
            />
            <Icon {...pickIconProps({ ...this.props, overlay: true, icon: this.props.iconOverlay })} />
            <Underline {...pickUnderlineProps({...this.props, focused})} />
          </View>
          <Error {...pickErrorProps(this.props)} />
        </View>
      </View>
    )
  }
}
