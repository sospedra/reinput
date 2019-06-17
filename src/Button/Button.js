import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

import Error, { pickErrorProps } from '../Error'
import Icon, { pickIconInternalProps } from '../Icon'
import Label, { pickLabelProps } from '../Label'
import Underline, { pickUnderlineProps } from '../Underline'
import { styles as stylesInput } from '../Input'
import { defaultProps, propTypes, pickTouchableOpacityProps } from './props'
import * as styles from './styles'

/**
 * @typedef {typeof defaultProps} Props
 * @augments {React.Component<Props, {}>}
 */
export default class ReinputButton extends React.Component {
  /** @type {Props} */
  static propTypes = {...TouchableOpacity.propTypes, ...propTypes}
  static defaultProps = defaultProps

  onPress () {
    return (...args) => {
      this.props.onPress(...args)
    }
  }

  hasValidValue (value) {
    return !!(value && value.length > 0)
  }

  render () {
    const hasValue = this.hasValidValue(this.props.value)
    const height = this.props.fontSize * styles.SCALE_FACTOR

    return (
      <View style={stylesInput.row}>
        <Icon {...pickIconInternalProps(this.props)}
          icon={this.props.icon}
        />
        <View style={stylesInput.container(this.props)}>
          <View
            accessible={this.props.accessible}
            accessibilityLabel={this.props.accessibilityLabel || this.props.label}
          >
            <TouchableOpacity
              {...pickTouchableOpacityProps(this.props)}
              onPress={this.onPress()}
              ref={this.props.register}
              style={styles.transparent()}
            >
              <View>
                <Label {...pickLabelProps({...this.props, hasValue})} />
                <Text
                  numberOfLines={1}
                  pointerEvents='none'
                  style={[stylesInput.input(this.props, height), styles.input(this.props)]}
                >
                  {hasValue && this.props.value}
                </Text>
              </View>
            </TouchableOpacity>
            <Icon {...pickIconInternalProps(this.props)}
              overlay icon={this.props.iconOverlay} />
            <Underline {...pickUnderlineProps({...this.props})} />
          </View>
          <Error {...pickErrorProps(this.props)} />
        </View>
      </View>
    )
  }
}
