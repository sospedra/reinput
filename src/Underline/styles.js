import { Platform, StyleSheet } from 'react-native'

export default StyleSheet.create({
  underlineWrapper: {
    alignItems: 'center',
    borderBottomWidth: 1
  },
  disabled: {
    borderStyle: Platform.OS === 'ios' ? 'solid' : 'dotted'
  }
})
