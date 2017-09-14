import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Reinput from 'reinput'

export default class example extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Reinput
          label='Reinput'
          highlightColor='blue'
          icon={Icon}
          style={{ marginHorizontal: 24 }}
        />
      </View>
    )
  }
}

class Icon extends React.Component {
  render () {
    return <View style={{
      backgroundColor: 'cadetblue',
      width: 24,
      height: 24
    }} />
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
})
