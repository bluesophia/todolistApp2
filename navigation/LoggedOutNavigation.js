import { createStackNavigator } from "react-navigation";
import LogInScreen from "../screens/LoginScreen/presenter";
import React, { Component } from "react";
import { View, Text } from "react-native";

// const LoggedOutNavigation = createStackNavigator({
//   Login: {
//     screen: LogInScreen,
//     navigationOptions: {
//       header: null
//     }
//   }
// });

class LoggedOutNavigation extends Component {
  render(){
    return(
      <Text>LoggedOut</Text>
    )
  }
}
export default LoggedOutNavigation;
