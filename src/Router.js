import React, { Component } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Scene, Router, Actions } from "react-native-router-flux";
import { connect } from "react-redux";
import Home from "./components/Home";
import Main from "./components/Main";
class RouterComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (

        <Router>
        <Scene hideNavBar={true} key="main" type="replace">
        <Scene key="mainPage" component={Main} />
               
        <Scene key="home" component={Home} />
                </Scene>
        </Router>


    );
  }
}
const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps, {

})(RouterComponent);
