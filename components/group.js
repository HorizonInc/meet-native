import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';

export default class Groups extends Component {
    constructor(props) {
        super(props);
        this.state = {
          text: "",
          borderColour: "#fff",
        };
    }
    checkID() {
        var str = this.state.text;
        var isCorrect = /^([A-Z]+#[A-Z0-9]{5})$/.test(str);
        if(str === "") {
            this.setState({borderColour: "#fff"});
        } else if (isCorrect) {
            this.setState({borderColour: "green"});
        } else {
            this.setState({borderColour: "red"})
        }
    }
    render() {
        return(
            <View style={groupCreateStyles.container}>
                <Text style={groupCreateStyles.title}>CREATE A GROUP</Text>
                <TextInput style={[groupCreateStyles.input, {borderColor: this.state.borderColour}]}
                           onChangeText={(text) => {
                                                      this.setState({text});
                                                      this.checkID();
                                                    }}
                           value={this.state.text}
                           placeholder="Enter ID's of users to invite:"
                           placeholderTextColor="#888"
                />
                <View style={groupCreateStyles.groupMembers}>

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
    title: {
        fontSize: 35,
        fontFamily: "Arial",
        top: 80,
        fontWeight: "700",
        color: "#68bde1",
    },
    input: {
        top: 140,
        paddingLeft: 20,
        width: 340,
        height: 50,
        backgroundColor: "#fff",
        borderRadius: 15,
        shadowOffset:{  width: 3,  height: 3,  },
        shadowColor: "rgba(0, 0, 0, 0.1)",
        shadowOpacity: 1.0,
        borderWidth: 3,
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
