import React, { Component } from "react";
import LogInScreen from "./presenter";
import Form from "./Form.js";
import Button from "./Button.js";
import PropTypes from "prop-types";
import { Alert } from "react-native";

class Container extends Component {
  // 화면에서 보여지는 모든 함수 관리
  // index는 리덕스를 연결해주는애
  state = {
    email: "",
    password: "",
    isSubmitting: false,
    showPass: true,
    press: false,
  };

  render() {
    return <LogInScreen 
    {...this.state}
    />;
    <Form 
      {...this.state}
      changeUsername={this._changeUsername}
      changePassword={this._changePassword}
      showPass={this._showPass}
    />;
    <Button 
      {...this.state}
      submit={this._submit}
    />;
  }
  _changeEmail = email => {
    this.setState({ email });
  };

  _changePassword = password => {
    this.setState({ password })
  };

  _submit = () => {
    const { email,  password, isSubmitting } = this.state;
    if (!isSubmitting) {
      if (username && password) {
        this.setState({
          isSubmitting: true
        });
      } else {
        Alert.alert("All fields are required");
      }
    }
  };
  _showPass = () => {
      this.state.press === false
        ? this.setState({showPass: false, press: true})
        : this.setState({showPass: true, press: false});
  }
}

// Container.propTypes = {
//   email: PropTypes.number.isRequired,
//   password: PropTypes.string.isRequired
// }

export default Container;
