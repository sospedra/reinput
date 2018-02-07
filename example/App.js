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
          label='👋'
        />
        <Reinput
          label='Easy align icons'
          icon={<Text>ICO</Text>}
        />
        <Reinput
          label='Redish'
          error='Something broken here 🙀'
        />
        <Reinput
          label='I love the'
          value='potatoes'
        />
        <Reinput
          label='I not love the'
          defaultValue='carrots'
        />
      </View>
    )
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
