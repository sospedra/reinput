import React from 'react'
import { View, TextInput } from 'react-native'

import Label, { pickLabelProps } from './Label'
import Placeholder from './Placeholder'
import Underline from './Underline'
import ErrorHelper from './ErrorHelper'
import { defaultProps, propTypes, pickTextInputProps } from './props'
import * as styles from './styles'

export default class Input extends React.Component {
  static propTypes = propTypes
  static defaultProps = defaultProps

  constructor (props) {
    super(props)

    this.state = {
      value: null,
      focused: false,
      height: props.fontSize * styles.SCALE_FACTOR
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

  render () {
    const { focused } = this.state
    const value = this.props.value != null ? this.props.value : this.state.value
    const hasValue = value && value.length > 0
    const {
      activeColor,
      error,
      errorColor,
      errorFontSize,
      errorPaddingTop,
      fontFamily,
      fontSize,
      fontWeight,
      paddingBottom,
      paddingLeft,
      paddingRight,
      paddingTop,
      placeholder,
      placeholderColor,
      underlineActiveColor,
      underlineActiveHeight,
      underlineColor,
      underlineDuration,
      underlineHeight
    } = this.props
    const placeholderProps = {
      focused,
      fontFamily,
      fontSize,
      fontWeight,
      hasValue,
      paddingBottom,
      paddingLeft,
      paddingRight,
      paddingTop,
      placeholder,
      placeholderColor
    }
    const underlineProps = {
      activeColor,
      error,
      errorColor,
      focused,
      underlineActiveColor,
      underlineActiveHeight,
      underlineColor,
      underlineDuration,
      underlineHeight
    }
    const errorProps = {
      error,
      errorColor,
      errorFontSize,
      errorPaddingTop
    }

    return (
      <View style={styles.container(this.props)}>
        <Label {...pickLabelProps(this.props)} />
        {placeholder ? <Placeholder {...placeholderProps} /> : null}
        <TextInput
          {...pickTextInputProps(this.props)}
          onBlur={this.handleBlur}
          onChangeText={this.handleChangeText}
          onContentSizeChange={this.handleContentSizeChange}
          onFocus={this.handleFocus}
          style={styles.input(this.props, this.state.height)}
          underlineColorAndroid="transparent"
          value={value}
        />
        <Underline {...underlineProps} />
        {error ? <ErrorHelper {...errorProps} /> : null}
      </View>
    )
  }
}
