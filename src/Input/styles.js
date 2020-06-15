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

export const container = (props) => {
  const { marginTop = 0, labelSpacingTop = 0 } = props
  return {
    alignSelf: 'flex-start',
    marginBottom: props.marginBottom,
    marginLeft: props.marginLeft,
    marginRight: props.marginRight,
    marginTop: marginTop + (props.label ? labelSpacingTop : 0),
    flex: 1
  }
}

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
    'paddingTop',
    'textAlign'
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
