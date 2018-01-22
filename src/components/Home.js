import React, { Component } from 'react';
import { connect } from "react-redux";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button
} from 'react-native';

import { incrementCounterByOne, decrementCounterByOne, setCounterValue } from '../actions/index';


class Home extends Component{

  constructor() {
    super();
    this.state= {
      number: '',
    }
    this._onPressInc = this._onPressInc.bind(this);
    this._onPressDec = this._onPressDec.bind(this);
    this._onPressSet = this._onPressSet.bind(this);
  }

  _onPressInc() {
    this.props.incrementCounterByOne();
  }

  _onPressDec(){
    this.props.decrementCounterByOne();
  }

  _onPressSet(){
    this.props.setCounterValue(this.state.number);
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 17, color: 'red', margin: 30}}>{this.props.title}</Text>

      <View style={{ flexDirection: 'row'}}>
      <Text style={{ fontSize: 15 }}>Counter: </Text>
      <Text style={{ fontSize: 18, color: 'blue' }}>{this.props.counter.value}</Text>
      </View>

      <Button onPress={this._onPressInc} title="Increment By 1" color="#FF5478"/>
      <Button onPress={this._onPressDec} title="Decrement By 1" color="#FF5478"/>
      <Button onPress={this._onPressSet} title="Set Value" color="#FF5478"/>

      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(number) => this.setState({number})}
        value={this.state.number}
      />

      </View>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    counter: state.counter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    incrementCounterByOne: () => dispatch(incrementCounterByOne()),
    decrementCounterByOne: () => dispatch(decrementCounterByOne()),
    setCounterValue: (val) => dispatch(setCounterValue(val)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    paddingVertical: 50,
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