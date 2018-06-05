import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import moment from "moment";
import PropTypes from "prop-types";

class Date extends Component {
    constructor(props) {
		super(props);
		this.state = {
			date: moment().format("LL"),
		};
	}
    render(){
        return(
            // <View style={styles.container}>
                <Text style={styles.datetext}>{this.state.date}</Text>
            // </View>  
        )
    }
}                

const styles=StyleSheet.create({
    // container:{
    //     flex:3,
    //     alignItems: "center",
    //     justifyContent: "center"
    // },
    datetext:{
        color: "#fff",
        fontSize: 12,
        shadowColor: '#fff',
        shadowRadius: 10,
        shadowOpacity: 1,
        elevation: 50,
        shadowOffset: {
            width: 0,
            height: 10
        }
    }
})

export default Date;