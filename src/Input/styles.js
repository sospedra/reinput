import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  wrapper: {
    height: 72,
    paddingBottom: 7,
    paddingTop: 30,
    position: 'relative',
    alignSelf: 'stretch',
    flexDirection: 'row'
  },
  denseWrapper: {
    height: 60,
    paddingBottom: 4,
    paddingTop: 28,
    position: 'relative',
    alignSelf: 'stretch',
    flexDirection: 'row'
  },
  icon: {
    width: 24,
    marginHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center'
  },
  expand: {
    flex: 1
  },
  textInput: {
    fontSize: 16,
    height: 34,
    lineHeight: 34,
    textAlignVertical: 'top'
  },
  denseTextInput: {
    fontSize: 13,
    height: 27,
    lineHeight: 24,
    paddingBottom: 3,
    textAlignVertical: 'top'
  }
})
