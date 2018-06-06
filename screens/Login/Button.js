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
      <TouchableOpacity 
        onPressOut={props.submit} 
        style={styles.button}
        activeOpacity={1}
        >
          {props.isSubmitting ? (
            <ActivityIndicator size="large" color="white" marginTop={10}/>
          ) : (
            <Text style={styles.text}>Login</Text>
              )}
          )}
      </TouchableOpacity>
    )
          
const styles=StyleSheet.create({
      button: {
        alignItems: 'center',
        justifyContent: 'center',
      },
      text: {
        color: 'white',
        backgroundColor: 'transparent',
      }
})
export default Button;