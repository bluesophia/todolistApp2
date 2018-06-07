import React, { Component } from "react";
import LogInScreen from "./presenter";
import PropTypes from "prop-types";
import { Alert } from "react-native";

class Container extends Component {
  // 화면에서 보여지는 모든 함수 관리
  // index는 리덕스를 연결해주는애
  state = {
    email: "",
    password: "",
    isSubmitting: false,
  };

  render() {
    return <LogInScreen 
    {...this.state}
      changeUsername={this._changeUsername}
      changePassword={this._changePassword}
      submit={this._submit}
    />;
  }
  _changeEmail = email => {
    this.setState({ email });
  };

  _changePassword = password => {
    this.setState({ password });
  };

  _submit = () => {
    const { email,  password, isSubmitting } = this.state;
    //const { navigate } = this.props.navigation;
    if (!isSubmitting) {
      if (email && password) {
        this.setState({
          isSubmitting: true
        });
      } else {
        Alert.alert("All fields are required");
      }
    }
   };


}

Container.propTypes = {
    isSubmitting: PropTypes.bool.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    changeUsername: PropTypes.func.isRequired,
    changePassword: PropTypes.func.isRequired,
    submit: PropTypes.func.isRequired
  };
export default Container;
