import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Reinput from 'reinput'
import TextInput from 'react-native-material-textinput'

class Exi extends Component {
  state = {
    name: ''
  }

  render () {
    let { name } = this.state

    return (
      <TextInput
        label="Name"
        value={name}
        onChangeText={name => this.setState({ name })}
      />
    )
  }
}

export default class example extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <View style={styles.bg}>
          <Reinput label='holis' />
        </View>
        <View style={styles.bg}>
          <Exi />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  bg: {
    height: 80,
    width: '100%'
  },
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
