import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, StatusBar, StyleSheet } from "react-native";
import LoggedOutNavigation from "../../navigation/LoggedOutNavigation";
import RootNavigation from "../../navigation/RootNavigation";
import LoginScreen from "../../screens/LoginScreen/presenter";

class AppContainer extends Component {
  static propTypes = {
    //isLoggedIn: PropTypes.bool.isRequired
  };

  render() {
    const { isLoggedIn } = this.props;
    return (
      <View style={styles.container}>
        <StatusBar hidden={false} />
        <LoginScreen />
        {/* <RootNavigation /> */}
        {isLoggedIn ? <Text>Login</Text> : <Text>Logout</Text>}
        {/* {isLoggedIn ? <Text>Login</Text> : <LoggedOutNavigation />} */}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});


export default AppContainer;
