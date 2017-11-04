import React, { Component } from 'react';
import {
  StyleSheet,
  Switch,
  Clipboard,
} from 'react-native';

import { 
  Container, 
  Header, 
  Title, 
  Content, 
  Footer, 
  FooterTab, 
  Button, 
  Body, 
  Icon,
  Input,
  Text 
} from 'native-base';

import { generatePassword } from './password';

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      password: '',
      length: 10,
      numbers: false,
      symbols: false,
      uppercase: true,
      excludeSimilarCharacters: false,
      strict: false,
    };
  }

  writeToClipboard = async () => {
    const {length, numbers, symbols, uppercase, excludeSimilarCharacters, strict} = this.state;
    const password = generatePassword({
      length,
      numbers,
      symbols,
      uppercase,
      excludeSimilarCharacters,
      strict
    });
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
      <Container>
        <Header>
          <Body>
            <Title>Welcome to password generator!</Title>
          </Body>
        </Header>
        <Content>
          <Input 
            placeholder="Underline Textbox" 
            onChangeText={(text) => this.setState({length: text})}
            value={this.state.length}
            keyboardType={'numeric'}
          />
          <Text> Numbers </Text>
          <Switch
            onValueChange={(value) => this.setState({numbers: value})}
            style={{marginBottom: 10}}
            value={this.state.numbers} 
          />
          <Text style={styles.instructions}>
            {this.state.password}
          </Text>
          <Button onPress={this.writeToClipboard}>
            <Text>Copy new password to Clipboard</Text>
          </Button>
        </Content>
        <Footer>
          <FooterTab>
            <Button full>
              <Text>Footer</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
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
