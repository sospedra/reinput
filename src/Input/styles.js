import { Platform } from 'react-native'

import pick from '../services/pick'

export const SCALE_FACTOR = 1.5

export const row = {
  alignItems: 'center',
  flexDirection: 'row'
}

export const container = (props) => ({
  ...pick(props, [
    'marginBottom',
    'marginLeft',
    'marginRight',
    'marginTop'
  ]),
  flex: 1
})

export const input = (props = {}, stateHeight) => {
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
    ...Platform.select({
      ios: { height },
      android: {
        height,
        textAlignVertical: 'top'
      }
    })
  }
}
