import { Platform } from 'react-native'

import pick from '../services/pick'

export const SCALE_FACTOR = 1.5

export const columns = {
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'center'
}

export const row = {
  alignItems: 'center',
  flexDirection: 'row',
  overflow: 'hidden'
}

export const cell = {
  justifyContent: 'center'
}

export const container = (props) => ({
  alignSelf: 'flex-start',
  marginBottom: props.marginBottom,
  marginLeft: props.marginLeft,
  marginRight: props.marginRight,
  marginTop: props.marginTop + (props.label ? props.labelSpacingTop : 0),
  flex: 1
})

export const input = (props = {}, stateHeight, hasValue) => {
  const autogrowHeight = (props.multiline && props.height) ? props.height : stateHeight
  const multilineHeight = props.multiline ? autogrowHeight : props.fontSize * SCALE_FACTOR
  const height = props.paddingTop + props.paddingBottom + multilineHeight
  const styles = pick(props, [
    'color',
    'fontFamily',
    'fontSize',
    'fontWeight',
    'maxHeight',
    'minHeight',
    'paddingBottom',
    'paddingLeft',
    'paddingRight',
    'paddingTop'
  ])

  return {
    ...styles,
    color: hasValue ? styles.color : 'transparent',
    ...Platform.select({
      ios: { height },
      android: {
        height,
        textAlignVertical: 'top'
      }
    })
  }
}
