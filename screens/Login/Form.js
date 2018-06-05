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

    constructor(props) {
        super(props);
        this.state = {
          showPass: true,
          press: false,
        };
        this.showPass = this._showPass.bind(this);
      }
      _showPass() {
        this.state.press === false
          ? this.setState({showPass: false, press: true})
          : this.setState({showPass: true, press: false});
      }
    
      render(){
        return(
             <KeyboardAvoidingView behavior="padding">
                <UserInput
                source={require("../../assets/images/user.png")}
                placeholder="email"
                autoCapitalize={'none'}
                returnKeyType={'next'}
                autoCorrect={false}
                />,
                <UserInput
                source={require("../../assets/images/lock.png")}
                secureTextEntry={this.state.showPass}
                placeholder="Password"
                returnKeyType={'done'}
                autoCapitalize={'none'}
                autoCorrect={false}
                />
             </KeyboardAvoidingView>
        )
    }
}

export default Form;