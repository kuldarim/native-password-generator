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
  Text,
  Card, 
  CardItem,
  Right
} from 'native-base';

import { generatePassword } from './password';

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      password: '',
      length: '10',
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
          <Card>
            <CardItem>
              <Text>Numbers</Text>
              <Right>
                <Switch
                  onValueChange={(value) => this.setState({numbers: value})}
                  value={this.state.numbers} 
                />
              </Right>
            </CardItem>
            <CardItem>
              <Text>Symbols</Text>
              <Right>
                <Switch
                  onValueChange={(value) => this.setState({Symbols: value})}
                  value={this.state.Symbols} 
                />
              </Right>
            </CardItem>
            <CardItem>
              <Text>Uppercase</Text>
              <Right>
                <Switch
                  onValueChange={(value) => this.setState({uppercase: value})}
                  value={this.state.uppercase} 
                />
              </Right>
            </CardItem>
            <CardItem>
              <Text>Similar chars</Text>
              <Right>
                <Switch
                  onValueChange={(value) => this.setState({excludeSimilarCharacters: value})}
                  value={this.state.excludeSimilarCharacters} 
                />
              </Right>
            </CardItem>
            <CardItem>
              <Text>Strict</Text>
              <Right>
                <Switch
                  onValueChange={(value) => this.setState({strict: value})}
                  value={this.state.strict} 
                />
              </Right>
            </CardItem>
            <CardItem>
              <Text>Length</Text>
              <Right>
                <Input 
                  placeholder="Underline Textbox" 
                  onChangeText={(text) => this.setState({length: text})}
                  value={this.state.length}
                  keyboardType={'numeric'}
                />
              </Right>
            </CardItem>
          </Card>
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
