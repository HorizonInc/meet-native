import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default class mapScreen extends Component {
    render() {
      return (
        <View style={mapStyles.container}>
          <Text>The map screen will be here</Text>
          <TouchableOpacity style={mapStyles.button} onPress={() => {this.props.navigation.navigate('Groups');}}>
            <Text>Leave Group</Text>
          </TouchableOpacity>
          <TouchableOpacity style={mapStyles.button} onPress={() => {this.props.navigation.navigate('Home');}}>
            <Text>Logout</Text>
          </TouchableOpacity>
        </View>
      );
    }
};

const mapStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#f3f3f3"
    },
    button: {
      alignItems: "center",
      justifyContent: "center",
      width: 300,
      height: 100,
      borderRadius: 10,
      backgroundColor: "#3498db"
    }
});
