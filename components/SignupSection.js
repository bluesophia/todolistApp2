import React, { Component } from "react";
import PropTypes from "prop-types";
import Dimensions from "Dimensions";
import {
    StyleSheet, 
    View, 
    Text
} from "react-native";

const { width, height } = Dimensions.get("window");

class SignupSection extends Component {
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.text}>Forgot Password?</Text>
                <Text style={styles.text}>Create Account</Text>
            </View>    
        )
    }
}

const styles = StyleSheet.create({
     container: {
    //   flex: 1,
       top: 15,
       flexDirection: "column",
       alignItems: "center",
       marginTop: 10
     },
    text: {
      color: "white",
      backgroundColor: "transparent",
      marginTop: 10
    },
  });

export default SignupSection;