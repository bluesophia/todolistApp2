import React, { Component } from "react";
import Proptypes from "prop-types";
import { StyleSheet, View, Text, Image } from "react-native";

class Logo extends Component {
    render(){
        return (
        //    <View style={styles.container}>
               <Text style={styles.text}>TodoList</Text>
          // </View> 
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:3,
        alignItems: "center",
        justifyContent: "center"
    },
    text:{
        color: "#fff",
        fontSize: 45,
        backgroundColor: 'transparent',
        marginTop: 20
    }
})

export default Logo;