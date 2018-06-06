import React, { Component } from "react";
import PropTypes from "prop-types";
import Dimensions from "Dimensions";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Image
} from "react-native";      

import UserInput from "./UserInput";
import Button from "./Button";
import SignupSection from "./SignupSection";

const { width, height } = Dimensions.get("window");

class Form extends Component {
      render(){
        const {
          email, 
          changeEmail, 
          password, 
          changePassword,
          showPass
        } = this.props;
        return(
             <KeyboardAvoidingView behavior="padding">
                <UserInput
                source={require("../../assets/images/user.png")}
                placeholder="email"
                value={this.props.email}
                onChangeText={changeEmail}
                autoCapitalize={'none'}
                returnKeyType={'next'}
                autoCorrect={false}
                />
                <UserInput
                source={require("../../assets/images/lock.png")}
                placeholder="Password"
                value={this.props.password}
                onChangeText={changePassword}
                returnKeyType={'done'}
                autoCapitalize={'none'}
                autoCorrect={false}
                />
                <TouchableOpacity
                  activeOpacity={0.7}
                  style={styles.btn}
                  onPressOut={this.props.showPass}
                >
                  <Image 
              resizeMode={'stretch'}
              style={styles.loginbtn}
              source={require("../../assets/images/login.png")} />
                </TouchableOpacity>
             </KeyboardAvoidingView>
        )
    }
}



const styles=StyleSheet.create({
  btn: {
    justifyContent: 'center', 
    alignItems: 'center',
  },
  loginbtn: {
    width: 35,
    height:30,
    marginTop:20
  }
})
export default Form;