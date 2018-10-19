import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';

class Member extends Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
    render() {
        return(
          <View style={memberStyles.container}>
              <Text>{this.props.id}</Text>
              {/*<TouchableOpacity style={memberStyles.xButton}>
                  <Text style={memberStyles.x}>X</Text>
              </TouchableOpacity>*/}
          </View>
        );
    }
}

export default class Groups extends Component {
    constructor(props) {
        super(props);
        this.state = {
          text: "",
          testText: "",
          borderColour: "#fff",
          ids: [
            "",
          ],
        };
    }
    checkID() {
        let str = this.state.text;
        let isCorrect = /^([A-Z]+#[A-Z0-9]{5})$/.test(str);
        if(str === "") {
            this.setState({borderColour: "#fff"});
        } else if (isCorrect) {
            this.setState({borderColour: "green"});
            return true;
        } else {
            this.setState({borderColour: "red"});
            return false;
        }

    }
    addId() {
        let id = this.state.text;
        if(this.checkID()) {
            let idArray = this.state.ids;
            idArray.push(this.state.text);
            this.setState({ids: idArray});
        }
    }
    render() {
        return(
            <View style={groupCreateStyles.container}>
                <Text style={groupCreateStyles.title}>CREATE A GROUP</Text>
                <View style={groupCreateStyles.inputContainer}>
                    <TextInput style={[groupCreateStyles.input, {borderTopColor: this.state.borderColour, borderLeftColor: this.state.borderColour, borderBottomColor: this.state.borderColour}]}
                               onChangeText={(textIn) => {
                                                          this.setState({text: textIn});
                                                          this.checkID();
                                                        }}
                               value={this.state.text}
                               placeholder="Enter ID's of users to invite:"
                               placeholderTextColor="#888"
                    />
                    <TouchableOpacity onPress={this.addId()} style={[groupCreateStyles.plus, {borderTopColor: this.state.borderColour, borderRightColor: this.state.borderColour, borderBottomColor: this.state.borderColour}]}>
                        <Text style={groupCreateStyles.plusButton}>+</Text>
                    </TouchableOpacity>
                </View>
                <View style={groupCreateStyles.groupMembers}>
                  <Member text={this.state.testText} />
                </View>
                <TouchableOpacity>
                    <View style={groupCreateStyles.goButton}>
                        <Text style={groupCreateStyles.goButtonText}>Meet Up!</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

const groupCreateStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f3f3f3",
        alignItems: "center"
    },
    plusButton: {
        fontSize: 35,
        fontWeight: "900",
        color: "#68bde1",
        bottom: 2
    },
    plus: {
        width: 50,
        height: 50,
        backgroundColor: "#fff",
        borderTopWidth: 3,
        borderBottomWidth: 3,
        borderRightWidth: 3,
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15,
        borderColor: "#fff",
        shadowOffset:{  width: 3,  height: 3,  },
        shadowColor: "rgba(0, 0, 0, 0.1)",
        shadowOpacity: 1.0,
        left: 142,
        top: 90,
        justifyContent: "center",
        alignItems: "center",
    },
    inputContainer: {
        width: 340,
        height: 50,
        alignItems: "center",
        justifyContent: "center"
    },
    title: {
        fontSize: 35,
        fontFamily: "Arial",
        top: 80,
        fontWeight: "700",
        color: "#68bde1",
    },
    input: {
        right: 25,
        top: 140,
        paddingLeft: 20,
        width: 290,
        height: 50,
        backgroundColor: "#fff",
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
        shadowOffset:{  width: 3,  height: 3,  },
        shadowColor: "rgba(0, 0, 0, 0.1)",
        shadowOpacity: 1.0,
        borderLeftWidth: 3,
        borderTopWidth: 3,
        borderBottomWidth: 3,
        borderRightWidth: 0,
        borderColor: "#fff"
    },
    groupMembers: {
        top: 180,
        width: 340,
        height: 360,
        borderRadius: 15,
        backgroundColor: "#fff",
        shadowOffset:{  width: 3,  height: 3,  },
        shadowColor: "rgba(0, 0, 0, 0.1)",
        shadowOpacity: 1.0,
    },
    goButton: {
        top: 250,
        width: 340,
        height: 60,
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#3498db",
        shadowOffset:{  width: 3,  height: 3,  },
        shadowColor: "rgba(0, 0, 0, 0.1)",
        shadowOpacity: 1.0,
    },
    goButtonText: {
        fontSize: 25,
        color: "#fff",
        fontFamily: "Arial",
        fontWeight: "600"
    }
});

const memberStyles = StyleSheet.create({

});
