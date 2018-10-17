import React, {Component} from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

import logo from "../assets/images/meet_logo.png";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
  }
  login() {

  }
  render() {
    var today = new Date();
    return(
      <View style={loginStyles.container}>
        <Image style={loginStyles.logo} source={logo} />
        <Text style={loginStyles.meet}>meet</Text>
        <TouchableOpacity>
          <View style={loginStyles.loginButton}>
            <Text style={loginStyles.loginText}>Login with Facebook</Text>
          </View>
        </TouchableOpacity>
        <Text style={loginStyles.copyright}>Copyright &copy; {today.getFullYear()} Horizon </Text>
      </View>
    );
  }
}

const loginStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#f3f3f3",
      alignItems: "center",
      justifyContent: "center",
      alignSelf: "stretch"
    },
    logo: {
      width: 190,
      height: 190,
    },
    meet: {
      fontSize: 35,
      fontWeight: "700",
      color: "#75c9ed"
    },
    loginText: {
      fontSize: 18,
      fontWeight: "500",
      color: "#3088ad",
    },
    loginButton: {
      alignItems: "center",
      justifyContent: "center",
      width: 300,
      height: 50,
      backgroundColor: "#fff",
      color: "#000",
      bottom: -20,
      borderRadius: 15,
      shadowOffset:{  width: 3,  height: 3,  },
      shadowColor: "rgba(0, 0, 0, 0.1)",
      shadowOpacity: 1.0,
    },
    copyright: {
      bottom: -230,
      color: "#bdc3c7",
    }
});
