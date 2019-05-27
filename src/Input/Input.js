
import React from 'react'
import { View, TextInput } from 'react-native'

import Error, { pickErrorProps } from '../Error'
import Icon, { pickIconProps } from '../Icon'
import Label, { pickLabelProps } from '../Label'
import Placeholder, { pickPlaceholderProps } from '../Placeholder'
import Underline, { pickUnderlineProps } from '../Underline'
import { defaultProps, propTypes, pickTextInputProps } from './props'
import * as styles from './styles'

/**
 * @typedef {import('prop-types').InferProps<typeof propTypes>} ReinputProps
 * @augments {React.Component<ReinputProps, {}>}
 */
export default class ReinputInput extends React.Component {
  /** @type {ReinputProps} */
  static propTypes = { ...propTypes, ...TextInput.propTypes }
  static defaultProps = defaultProps

  constructor (props) {
    super(props)

    this.state = {
      focused: false,
      height: props.fontSize * styles.SCALE_FACTOR,
      value: props.value != null ? props.value : props.defaultValue
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

  getValue = () => { return this.isValueLocked() ? this.props.value : this.state.value }
  setValue = (value, ...args) => {
    if (!this.isValueLocked()) {
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

  isValueLocked = () => this.props.value !== undefined

  hasValueWithContent = (value) => {
    return typeof value === 'string' && value.length > 0
  }

  register = (ref) => {
    this.ref = ref
    this.props.register && this.props.register(ref)
  }

  focus = () => this.ref && this.ref.focus()

  render () {
    const { focused } = this.state
    const value = this.getValue()
    const hasValue = this.hasValueWithContent(value)

    return (
      <View style={[styles.row, this.props.style]}>
        <Icon {...pickIconProps({ ...this.props, onPress: this.focus })} />
        <View style={styles.container(this.props)}>
          <View
            accessible={this.props.accessible}
            accessibilityLabel={this.props.accessibilityLabel || this.props.label}
          >
            <Label {...pickLabelProps({...this.props, hasValue, focused})} />
            <Placeholder {...pickPlaceholderProps({...this.props, hasValue, focused})} />
            <TextInput
              {...pickTextInputProps(this.props)}
              onBlur={this.handleBlur}
              onChangeText={this.setValue}
              onContentSizeChange={this.handleContentSizeChange}
              onFocus={this.handleFocus}
              placeholder={undefined}
              ref={this.register}
              style={styles.input(this.props, this.state.height, hasValue)}
              underlineColorAndroid='transparent'
              value={value}
            />
            <Icon {...pickIconProps({
              ...this.props,
              icon: this.props.iconOverlay,
              onPress: this.focus,
              overlay: true
            })} />
            <Underline {...pickUnderlineProps({...this.props, focused})} />
          </View>
          <Error {...pickErrorProps(this.props)} />
        </View>
      </View>
    )
  }
}
