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

class LoginForm extends Component {
      render(){
        const {
          isLoggedIn, 
          isSubmitting,
          user,
          email,
          password,
          changeEmail,
          changePassword,
          submit
        } = this.props;
        return(
             <KeyboardAvoidingView behavior="padding">
                <UserInput
                value={email}
                source={require("../assets/images/user.png")}
                placeholder="email"
                onChangeText={changeEmail}
                autoCapitalize={'none'}
                returnKeyType={'next'}
                autoCorrect={false}
                />
                <UserInput
                source={require("../assets/images/lock.png")}
                placeholder="Password"
                value={password}
                onChangeText={changePassword}
                returnKeyType={'done'}
                autoCapitalize={'none'}
                autoCorrect={false}
                />
             </KeyboardAvoidingView>
        )
    }
  }

const styles=StyleSheet.create({
  btn: {
    justifyContent: 'center', 
    alignItems: 'center',
  }
})
export default LoginForm;