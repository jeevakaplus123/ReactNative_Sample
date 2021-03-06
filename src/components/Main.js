import React, { Component } from 'react';
import { connect } from "react-redux";
import {
  Platform,
  StyleSheet,
  Text,
  Button,
  View
} from 'react-native';
import { Actions } from 'react-native-router-flux';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class Main extends Component{

    constructor(props) {
        super(props);
    
        this.state = {
          textInput: "",
         
        };
      }

    _onPress() {
        Actions.home({ title: "This title is chanaka's value passed via Navigation"});
       }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
       
        <Button onPress={this._onPress} title="Hello" color="#FF5478"/>
        
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
