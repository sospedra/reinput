import React, { Component } from 'react'
import { Image, ScrollView, StyleSheet, Text } from 'react-native'
import Reinput, { ReinputButton } from 'reinput'

class ReinputButtonExample extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      value: ''
    }
  }

  render () {
    return (
      <ReinputButton
        label='This is not an Input but a Button'
        value={this.state.value}
        onPress={() => this.setState({
          value: this.state.value ? '' : 'If you want to survive out here, you have got to know where your towel is'
        })}
      />
    )
  }
}

class ReinputButtonWithIconExample extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      value: ''
    }
  }

  render () {
    return (
      <ReinputButton
        iconOverlay={<Image source={require('./icon.png')} />}
        label='Button with an overlay icon'
        onPress={() => this.setState({
          value: this.state.value ? '' : 'Icons are life'
        })}
        value={this.state.value}
      />
    )
  }
}

class RelayValue extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      value: ''
    }
  }

  render () {
    return (
      <Reinput
        value={this.state.value}
        label='Control value from outside the Reinput component'
        onChangeText={(value) => this.setState({ value })}
      />
    )
  }
}

export default class example extends Component {
  render () {
    return (
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        style={styles.container}>
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
          label='Add overlay icons'
          secureTextEntry
          iconOverlay={<Image source={require('./icon.png')} />}
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
          label='With defaultValues'
          defaultValue='🥕🥕🥕'
        />
        <Reinput
          label='And assistive text'
          placeholder='This is the native placeholder prop'
        />
        <RelayValue />
        <ReinputButtonExample />
        <ReinputButtonWithIconExample />
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    padding: 16
  },
  scrollContainer: {
    alignItems: 'center',
    justifyContent: 'center'
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
