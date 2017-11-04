/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Button,
  Clipboard,
  View
} from 'react-native';

import { generatePassword } from './password';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {

  constructor(props) {
    super(props);

    this.state = {
      password: '',
    };
  }

  writeToClipboard = async () => {
    const password = generatePassword();
    this.setState({password})
    await Clipboard.setString(this.state.password);
    alert('Copied to Clipboard!');
  };

  render() {
    // https://github.com/brendanashworth/generate-password
    //  var password = generatePassword({
	  //    length: 10,
	  //    numbers: true
    //  });
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to password generator!
        </Text>
        <Text style={styles.instructions}>
          {this.state.password}
        </Text>
        <Button
          onPress={this.writeToClipboard}
          title="Copy new password to Clipboard"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
