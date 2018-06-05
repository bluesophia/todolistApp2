import React, { Component } from "react";
import PropTypes from "prop-types";
import Dimensions from "Dimensions";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  Alert
} from "react-native";      

class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isLoading: false,
        };
        // this.submit = this.submit.bind(this);
      }
    //   _submit() {
    //     if (this.state.isLoading) return;
    
    //     this.setState({isLoading: true});
    //     Animated.timing(this.buttonAnimated, {
    //       toValue: 1,
    //       duration: 200,
    //       easing: Easing.linear,
    //     }).start();
    
    //     setTimeout(() => {
    //       Actions.secondScreen();
    //       this.setState({isLoading: false});
    //     }, 2300);
    //   }
      render(){
        return(
                <TouchableOpacity
                style={styles.button}
                onPress={this.submit}
                activeOpacity={1}>
                {this.state.isLoading ? (
                <ActivityIndicator size="large" color="white" />
                ) : (
                <Image 
                resizeMode={'stretch'}
                style={styles.loginbtn}
                source={require("../../assets/images/login.png")} />
                )}
                </TouchableOpacity>
        );
    }
    
}
          
const styles=StyleSheet.create({
      button: {
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 100, 
      },
      loginbtn: {
        width: 35,
        height:30,
        marginTop:20
      }
})
export default Button;