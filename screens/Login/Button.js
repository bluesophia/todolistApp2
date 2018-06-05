import React, { Component } from "react";
import PropTypes from "prop-types";
import Dimensions from "Dimensions";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  ActivityIndicator 
} from "react-native";      

const Button = props =>(
      <TouchableOpacity onPressOut={props.submit}>
        <View style={styles.button}>
          {props.isSubmitting ? (
            <ActivityIndicator size="large" color="white" marginTop={10}/>
          ) : (
            <Image 
              resizeMode={'stretch'}
              style={styles.loginbtn}
              source={require("../../assets/images/login.png")} />
              )}
          )}
        </View>
      </TouchableOpacity>
    )

    Button.propTypes = {
      isSubmitting: PropTypes.bool.isRequired,
      email: PropTypes.string.isRequired,
      password: PropTypes.string.isRequired,
      changeEmail: PropTypes.func.isRequired,
      changePassword: PropTypes.func.isRequired,
      submit: PropTypes.func.isRequired
     };
          
const styles=StyleSheet.create({
      button: {
        alignItems: 'center',
        justifyContent: 'center',
      },
      loginbtn: {
        width: 35,
        height:30,
        marginTop:20
      }
})
export default Button;