import React, {Component} from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import Login from "./components/login.js";
import Groups from "./components/group.js";

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Login />
        {/*<Groups />*/}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
