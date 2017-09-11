import React from 'react'
import { View, TextInput } from 'react-native'

import Underline from './Underline'
import FloatingLabel from './FloatingLabel'
import { defaultProps, propTypes } from './props'
import styles from './styles'

export class TextField extends React.Component {
  constructor (props: Object, context: Object) {
    super(props, context)
    this.elements = {}
    this.state = {
      isFocused: false,
      text: props.value,
      height: props.height
    }
  }
  focus () {
    this.elements.input.focus()
  }
  blur () {
    this.elements.input.blur()
  }
  isFocused () {
    return this.state.isFocused
  }
  measureLayout (...args) {
    this.elements.wrapper.measureLayout(...args)
  }
  componentWillReceiveProps (nextProps: Object) {
    if (this.props.text !== nextProps.value) {
      nextProps.value.length !== 0
        ? this.elements.floatingLabel.floatLabel()
        : this.elements.floatingLabel.sinkLabel()
      this.setState({text: nextProps.value})
    }
    if (this.props.height !== nextProps.height) {
      this.setState({height: nextProps.height})
    }
  }
  render () {
    let {
      label,
      highlightColor,
      duration,
      labelColor,
      borderColor,
      textColor,
      textFocusColor,
      textBlurColor,
      onFocus,
      onBlur,
      onChangeText,
      onChange,
      value,
      dense,
      inputStyle,
      wrapperStyle,
      labelStyle,
      height,
      autoGrow,
      multiline,
      ...props
    } = this.props
    return (
      <View style={[dense ? styles.denseWrapper : styles.wrapper, this.state.height ? {height: undefined} : {}, wrapperStyle]}
        ref={(ref) => { this.elements.wrapper = ref }}
      >
        <TextInput
          style={[dense ? styles.denseTextInput : styles.textInput, {
            color: textColor
          }, (this.state.isFocused && textFocusColor) ? {
            color: textFocusColor
          } : {}, (!this.state.isFocused && textBlurColor) ? {
            color: textBlurColor
          } : {}, inputStyle, this.state.height ? {height: this.state.height} : {}]}
          multiline={multiline}
          onFocus={() => {
            this.setState({isFocused: true})
            this.elements.floatingLabel.floatLabel()
            this.elements.underline.expandLine()
            onFocus && onFocus()
          }}
          onBlur={() => {
            this.setState({isFocused: false})
            !this.state.text.length && this.elements.floatingLabel.sinkLabel()
            this.elements.underline.shrinkLine()
            onBlur && onBlur()
          }}
          onChangeText={(text) => {
            this.setState({text})
            onChangeText && onChangeText(text)
          }}
          onChange={(event) => {
            if (autoGrow) {
              this.setState({height: event.nativeEvent.contentSize.height})
            }
            onChange && onChange(event)
          }}
          ref={(ref) => { this.elements.input = ref }}
          value={this.state.text}
          {...props}
        />
        <Underline
          ref={(ref) => { this.elements.underline = ref }}
          highlightColor={highlightColor}
          duration={duration}
          borderColor={borderColor}
        />
        <FloatingLabel
          isFocused={this.state.isFocused}
          ref={(ref) => { this.elements.floatingLabel = ref }}
          focusHandler={this.focus.bind(this)}
          label={label}
          labelColor={labelColor}
          highlightColor={highlightColor}
          duration={duration}
          dense={dense}
          hasValue={!!(this.state.text.length)}
          style={labelStyle}
        />
      </View>
    )
  }
}

TextField.propTypes = propTypes
TextField.defaultProps = defaultProps

export default TextField
