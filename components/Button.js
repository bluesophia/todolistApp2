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

class Button extends Component{
    constructor(){
      super();

      
    }
    render(){
      const { isSubmitting } = this.props;
      const { submit } = this.props;
      return(
      <TouchableOpacity 
        onPressOut={submit} 
        style={styles.button}
        //activeOpacity={1}
        >
            <Image 
              resizeMode={'stretch'}
              style={styles.loginbtn}
              source={require("../assets/images/login.png")} /> 
       
      </TouchableOpacity>
    );
  }  
}  


Button.propTypes = {
  submit: PropTypes.func,
};
const styles=StyleSheet.create({
      button: {
        alignItems: 'center',
        justifyContent: 'center',
      },
      text: {
        color: 'white',
        backgroundColor: 'transparent',
      },
      loginbtn: {
    width: 35,
    height:30,
    marginTop:20
  }
})
export default Button;