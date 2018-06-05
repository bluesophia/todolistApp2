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
        return(
             <KeyboardAvoidingView behavior="padding">
                <UserInput
                source={require("../../assets/images/user.png")}
                placeholder="email"
                value={this.props.email}
                onChangeText={this.props.changeEmail}
                autoCapitalize={'none'}
                returnKeyType={'next'}
                autoCorrect={false}
                />
                <UserInput
                source={require("../../assets/images/lock.png")}
                placeholder="Password"
                value={this.props.password}
                onChangeText={this.props.changePassword}
                returnKeyType={'done'}
                autoCapitalize={'none'}
                autoCorrect={false}
                />
             </KeyboardAvoidingView>
        )
    }
}
Form.propTypes = {
  email: PropTypes.number.isRequired,
  password: PropTypes.string.isRequired,
  changeEmail: PropTypes.func.isRequired,
  changePassword: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired
 };


export default Form;