import React, {Component} from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import { createStackNavigator } from 'react-navigation';

import Login from "./components/login.js";
import Groups from "./components/group.js";

const RootStack = createStackNavigator({
    Home: {
      screen: Login,
    },
    Groups: {
      screen: Groups
    }
},{
  initalRouteName: 'Home',
  headerMode: 'none'
 });

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <RootStack />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
