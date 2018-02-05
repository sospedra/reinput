import React from 'react'
import { View, TextInput, Platform } from 'react-native'

import Label from './Label'
import Placeholder from './Placeholder'
import Underline from './Underline'
import ErrorHelper from './ErrorHelper'
import { defaultProps, propTypes } from './props'

export default class Input extends React.Component {
  static propTypes = propTypes
  static defaultProps = defaultProps

  constructor (props) {
    super(props)

    this.state = {
      value: null,
      focused: false,
      height: props.fontSize * 1.5
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

    // Make support of uncontrolled component
    if (value == null) {
      this.setState({ value: args[0] })
    }

    onChangeText(...args)
  }

  handleContentSizeChange = event => {
    const { onContentSizeChange, fontSize } = this.props
    const { height } = event.nativeEvent.contentSize

    this.setState({
      height: Math.max(fontSize * 1.5, Math.ceil(height))
    })

    onContentSizeChange(event)
  }

  render () {
    let { focused, height } = this.state
    const value = this.props.value != null ? this.props.value : this.state.value
    const hasValue = value && value.length > 0
    const {
      activeColor,
      color,
      error,
      errorColor,
      errorFontSize,
      errorPaddingTop,
      fontFamily,
      fontSize,
      fontWeight,
      label,
      labelActiveColor,
      labelActiveScale,
      labelActiveTop,
      labelColor,
      labelDuration,
      marginBottom,
      marginLeft,
      marginRight,
      marginTop,
      maxHeight,
      minHeight,
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
      underlineHeight,
      ...props
    } = this.props
    const labelProps = {
      activeColor,
      error,
      errorColor,
      focused,
      fontFamily,
      fontSize,
      fontWeight,
      hasValue,
      label,
      labelActiveColor,
      labelActiveScale,
      labelActiveTop,
      labelColor,
      labelDuration,
      paddingBottom,
      paddingLeft,
      paddingRight,
      paddingTop
    }
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
    const containerStyle = {
      marginBottom,
      marginLeft,
      marginRight,
      marginTop
    }
    if (props.multiline && props.height) {
      // Disable autogrow if height prop
      height = props.height
    }
    const inputStyle = {
      color,
      fontFamily,
      fontSize,
      fontWeight,
      maxHeight,
      minHeight,
      paddingBottom,
      paddingLeft,
      paddingRight,
      paddingTop,
      ...Platform.select({
        ios: { height: paddingTop + paddingBottom + (props.multiline ? height : fontSize * 1.5) },
        android: {
          height: props.multiline ? height : fontSize * 1.5 + paddingTop + paddingBottom,
          textAlignVertical: 'top'
        }
      })
    }
    const errorProps = {
      error,
      errorColor,
      errorFontSize,
      errorPaddingTop
    }

    return (
      <View style={containerStyle}>
        <Label {...labelProps} />
        {placeholder ? <Placeholder {...placeholderProps} /> : null}
        <TextInput
          {...props}
          onBlur={this.handleBlur}
          onChangeText={this.handleChangeText}
          onContentSizeChange={this.handleContentSizeChange}
          onFocus={this.handleFocus}
          style={inputStyle}
          underlineColorAndroid="transparent"
          value={value}
        />
        <Underline {...underlineProps} />
        {error ? <ErrorHelper {...errorProps} /> : null}
      </View>
    )
  }
}
