import React, { Component } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import Reinput from 'reinput'

export default class example extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Awesome inputs with Reinput
        </Text>
        <Reinput
          label='Cool by default input 👋'
        />
        <Reinput
          label='Easy align icons'
          icon={<Image source={require('./icon.png')} />}
        />
        <Reinput
          label='Redish'
          error='Something broken here 🙀'
        />
        <Reinput
          label='Adjust any style'
          underlineDuration={1000}
          activeColor='#2E7D32'
        />
        <Reinput
          label='I do not like the'
          defaultValue='🥕🥕🥕'
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
    backgroundColor: '#F5FCFF',
    padding: 16
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
