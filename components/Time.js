import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import moment from "moment";
import PropTypes from "prop-types";

class Time extends Component {
    constructor(props) {
		super(props);
		this.state = {
			time: moment().format("LTS"),
		};
	}
    render(){
        return(
            //  <View style={styles.container}>
                <Text style={styles.timetext}>{this.state.time}</Text> 
            //</View>
        )
    }
}                

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems: "center",
        justifyContent: "center"
    },
    timetext:{
        color: "#fff",
        fontSize: 30,
        marginBottom: 5,
        shadowColor: '#fff',
        shadowRadius: 10,
        shadowOpacity: 1,
        elevation: 50,
        shadowOffset:{
            width: 0,
            height: 4
        }
    }
})

export default Time;